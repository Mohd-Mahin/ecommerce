import path from "path";
import util from "util";
import fs from "fs";

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const fPath = path.join(
  path.dirname(process.mainModule.filename),
  "server",
  "data",
  "product.json"
);

export default class Product {
  id: string;
  name: string;
  description: string;
  price: number;

  constructor(id: string, name: string, description: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  async save() {
    let products = [];
    const fileContent = await readFileAsync(fPath, { encoding: "utf8" });
    if (fileContent.length) products = JSON.parse(fileContent);
    products.push(this);
    try {
      await writeFileAsync(fPath, JSON.stringify(products), "utf8");
      return true;
    } catch (err) {
      return false;
    }
  }

  static async fetchAll() {
    const fileContent = await readFileAsync(fPath, { encoding: "utf8" });
    if (fileContent.length) return JSON.parse(fileContent);
    return [];
  }
}
