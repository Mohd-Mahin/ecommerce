import express from "express";
import { shopRouter } from "./shop";
import { adminRouter } from "./admin";

export function getApiRouter() {
  return express
    .Router({ mergeParams: true })
    .use("/shop", shopRouter())
    .use("/admin", adminRouter());
}
