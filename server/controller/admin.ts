import express, { Request, Response, Send } from "express";
import Product from "../model/product";

export function adminRouter() {
  return express
    .Router({ mergeParams: true })
    .get("/product-list", getProducts)
    .post("/add-product", postAddProduct)
    .post("/edit-product", postEditProduct);
}

async function getProducts(req, res: Response) {
  const products = await Product.fetchAll();
  res.send(products);
}

async function postAddProduct(req: Request, res: Response) {
  const { productName, productPrice, productDescription } = req.body;
  const isSaved = await new Product(
    productName,
    productDescription,
    productPrice
  ).save();
  res.send(isSaved);
}

function postEditProduct() {}
