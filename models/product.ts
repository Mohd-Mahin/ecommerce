const products: { title: string }[] = [{ title: "A Book" }];

export class Product {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  save() {
    products.push({ title: this.title });
  }

  static fetchAll() {
    return products;
  }
}
