import express from "express";
import { getApiRouter } from "./server/controller/api-router";
import path from "path";
import { notFound } from "./server/utils/helper-func";

const PORT = process.env.PORT || 14000;

async function main() {
  const server = express()
    .use(express.json())
    .use(express.static(path.join(__dirname, "..", "client", "dist")))
    .use("/api", getApiRouter())
    // // .use(notFound)
    .get("*", (req, res) => {
      res.send(`
      <!doctype html>
      <html lang="en">
      <head>
      <meta charset="UTF-8"/><meta name="viewport" content="width=<device-width>,initial-scale=1"/>
      <title>Ecommerce 1.x</title><style>body {
        margin: 0;
      }</style></head><body><div id="root"></div><script src="/bundle.js"></script></body></html>
      `);
    })
    .listen(PORT, () =>
      console.log(`Server listening on http://localhost:${PORT}`)
    );

  const stopServer = () => {
    console.log("sutting.down");
    server.close();
  };

  process.once("SIGINT", stopServer);
  process.once("SIGTERM", stopServer);
}

main().catch((err) => console.error("app.init.failed", err));
