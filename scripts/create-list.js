import { promises as fs } from "fs";
import camelcase from "camelcase";
import { dirname } from "path";

async function getIcons() {
  let files = await fs.readdir("./src/icons", "utf8");
  return Promise.all(
    files.map(async (file) => {
      return {
        component: `${camelcase(file.replace(/\.svg$/, ""), {
          pascalCase: true,
        })}Icon`,
      };
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
  let icons = await getIcons();

  await ensureWriteJson(`./list.json`, icons);
  console.log(icons);
}

main();
