import express, { Request, Response } from "express";

const product = [];

export function getShopRouter() {
  return express
    .Router({ mergeParams: true })
    .get("/", getIndexProducts)
    .post("/add-product", postAddProduct);
}

function getIndexProducts(req, res: Response) {
  res.send(product);
}

function postAddProduct(req: Request, res: Response) {
  const { prodName } = req.body;
  product.push({ title: prodName, shop: "Online" });
  res.send("saved");
}
