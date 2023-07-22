import camelcase from "camelcase";
import { transform } from "@svgr/core";
import { dirname } from "path";
import { rimraf } from "rimraf";
import { promises as fs } from "fs";

let transformedSVG = {
  react: async (svg, componentName, format) => {
    const svgCode = await transform(
      svg,
      {
        ref: false,
        memo: false,
        icon: true,
        titleProp: true,
        typescript: false,
        plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
      },
      { componentName: componentName }
    );

    if (format === "esm") {
      return svgCode;
    }

    return svgCode
      .replace(
        'import * as React from "react"',
        'const React = require("react")'
      )
      .replace("export default", "module.exports =");
  },
};

async function buildIcons(packageName, style, format) {
  let outDir = `./${packageName}/${style}`;
  if (format === "esm") {
    outDir += "/esm";
  }
  let icons = await getIcons({ format });

  await Promise.all(
    icons.flatMap(async ({ componentName, svg, format }) => {
      let content = await transformedSVG[packageName](
        svg,
        componentName,
        format
      );
      let types =
        packageName === "react"
          ? `import * as React from 'react';\ndeclare const ${componentName}: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;\nexport default ${componentName};\n`
          : `import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';\ndeclare const ${componentName}: FunctionalComponent<HTMLAttributes & VNodeProps>;\nexport default ${componentName};\n`;

      let fileExtension = format === "esm" ? "tsx" : "jsx";

      return [
        ensureWrite(`${outDir}/${componentName}.${fileExtension}`, content),
        ...(types
          ? [ensureWrite(`${outDir}/${componentName}.d.ts`, types)]
          : []),
      ];
    })
  );

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format));
  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, "esm", false));
}

async function getIcons({ format }) {
  let files = await fs.readdir("./src/icons", "utf8");
  return Promise.all(
    files.map(async (file) => {
      const svgFile = await fs.readFile(`./src/icons/${file}`, "utf8");
      return {
        svg: svgFile,
        componentName: `${camelcase(file.replace(/\.svg$/, ""), {
          pascalCase: true,
        })}Icon`,
        format: format,
      };
    })
  );
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, text, "utf8");
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension
        ? format === "esm"
          ? ".tsx"
          : ".jsx"
        : "";
      if (format === "esm") {
        return `export { default as ${componentName} } from "./${componentName}${extension}"`;
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`;
    })
    .join("\n");
}

async function ensureWriteJson(file, json) {
  await ensureWrite(file, JSON.stringify(json, null, 2) + "\n");
}

async function buildExports(styles) {
  let pkg = {};

  // To appease Vite's optimizeDeps feature which requires a root-level import
  pkg[`.`] = {
    import: `./index.esm.js`,
    require: `./index.js`,
  };

  // For those that want to read the version from packageArg.json
  pkg[`./package.json`] = { default: "./package.json" };

  // Explicit exports for each style:
  for (let style of styles) {
    pkg[`./${style}`] = {
      types: `./${style}/index.d.ts`,
      import: `./${style}/esm/index.js`,
      require: `./${style}/index.js`,
    };
    pkg[`./${style}/*`] = {
      types: `./${style}/*.d.ts`,
      import: `./${style}/esm/*.tsx`,
      require: `./${style}/*.jsx`,
    };
    pkg[`./${style}/*.jsx`] = {
      types: `./${style}/*.d.ts`,
      import: `./${style}/esm/*.tsx`,
      require: `./${style}/*.jsx`,
    };
  }

  return pkg;
}

function getPackageInfo() {
  return {
    name: "react-fluentui-emoji-slim",
    license: "MIT",
    version: "0.1.3-beta",
    description: "Fluent Emoji SVG icons for UI react development.",
    homepage: "https://github.com/jstnmthw/fluentui-emoji-icons#readme",
    keywords: ["FluentUI", "Icons", "React", "JS", "JavaScript"],
    repository: {
      type: "git",
      url: "git+https://github.com/jstnmthw/fluentui-emoji-icons.git",
    },
    bugs: {
      url: "https://github.com/jstnmthw/fluentui-emoji-icons/issues",
    },
  };
}

async function main(packageName) {
  const cjsPackageJson = { module: "./esm/index.js", sideEffects: false };
  const esmPackageJson = { type: "module", sideEffects: false };

  console.log(`Building ${packageName} package...`);

  await Promise.all([rimraf(`./${packageName}/icons/*`)]);

  await Promise.all([
    buildIcons(packageName, "/icons", "cjs"),
    buildIcons(packageName, "/icons", "esm"),
    ensureWriteJson(`./${packageName}/icons/package.json`, cjsPackageJson),
    ensureWriteJson(`./${packageName}/icons/esm/package.json`, esmPackageJson),
  ]);

  let packageJson = JSON.parse(
    await fs.readFile(`./${packageName}/package.json`, "utf8")
  );

  packageJson = { ...getPackageInfo(), ...packageJson };

  packageJson.exports = await buildExports(["icons"]);

  await ensureWriteJson(`./${packageName}/package.json`, packageJson);

  return console.log(`Finished building ${packageName} package.`);
}

let [framework] = process.argv.slice(2);

if (!framework) {
  throw new Error("Please specify a framework (react or vue)");
}

main(framework);
