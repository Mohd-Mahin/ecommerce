import express, { Request, Response } from "express";
import { shopRouter } from "./shop";
import { adminRouter } from "./admin";
import Product from "../model/product";

export function getApiRouter() {
  return express
    .Router({ mergeParams: true })
    .use("/shop", shopRouter())
    .use("/admin", adminRouter());
}
