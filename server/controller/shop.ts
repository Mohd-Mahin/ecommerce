import express, { Request, Response } from "express";
import Product from "../model/product";

export function shopRouter() {
  return express
    .Router({ mergeParams: true })
    .get("/", getHomePage)
    .get("/products", getProducts)
    .get("/cart", getCart)
    .get("/orders", getOrders);
}

async function getProducts(req, res: Response) {
  const products = await Product.fetchAll();
  res.send(products);
}

async function getHomePage(req: Request, res: Response) {
  const products = await Product.fetchAll();
  res.send(products);
}

function getCart() {}

function getOrders() {}
