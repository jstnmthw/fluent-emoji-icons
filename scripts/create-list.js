import { promises as fs } from "fs";
import camelcase from "camelcase";
import { dirname } from "path";

async function getIcons(plain) {
  let files = await fs.readdir("./src/icons", "utf8");
  return Promise.all(
    files.map(async (file) => {
      return plain
        ? `${camelcase(file.replace(/\.svg$/, ""), {
            pascalCase: true,
          })}Icon,
          `
        : `<${camelcase(file.replace(/\.svg$/, ""), {
            pascalCase: true,
          })}Icon className="w-6 h-6" />`;
    })
  );
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, text, "utf8");
}

async function ensureWriteJson(file, json) {
  await ensureWrite(file, JSON.stringify(json, null, 2) + "\n");
}

async function main() {
  let icons = await getIcons(true);

  await ensureWrite(`./plain.json`, icons);
  console.log(icons);
}

main();
