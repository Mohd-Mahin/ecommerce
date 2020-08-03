import express, { Request, Response } from "express";
import { Product } from "../models/product";

export function getShopRouter() {
  return express
    .Router({ mergeParams: true })
    .get("/", getIndexProducts)
    .post("/add-product", postAddProduct);
}

function getIndexProducts(req, res: Response) {
  res.send(Product.fetchAll());
}

function postAddProduct(req: Request, res: Response) {
  const { prodName } = req.body;
  new Product(prodName).save();
  res.send("saved");
}
