import express, { Request, Response } from "express";
import Product from "../model/product";
import { nanoid } from "nanoid";

export function adminRouter() {
  return express
    .Router({ mergeParams: true })
    .get("/product", getProducts)
    .post("/add-product", postAddProduct)
    .post("/edit-product", postEditProduct)
    .post("/delete/:prodId", postDeleteProduct);
}

async function getProducts(req, res: Response) {
  const products = await Product.fetchAll();
  res.send(products);
}

async function postAddProduct(req: Request, res: Response) {
  const { productName, productPrice, productDescription } = req.body;
  const nanoId = nanoid();
  const isSaved = await new Product(
    nanoId,
    productName,
    productDescription,
    productPrice
  ).save();
  res.send(isSaved);
}

function postEditProduct() {}

async function postDeleteProduct(req: Request, res: Response) {
  const { prodId } = req.params;
  console.log(prodId);
  res.end();
}
