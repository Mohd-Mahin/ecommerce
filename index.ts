import express, { Request, Response } from "express";
import { getApiRouter } from "./server/controller/api-router";
import path from "path";
import { notFound } from "./server/utils/helper-func";

const PORT = process.env.PORT || 14000;

async function main() {
  const server = express()
    .use(express.json())
    .use(express.static(path.join(__dirname, "..", "client", "dist")))
    .use("/api", getApiRouter())
    .use(notFound)
    .get("/*", (req: Request, res: Response) => {
      res.sendFile(
        path.join(__dirname, "..", "client", "dist", "index.html"),
        function (err) {
          if (err) res.status(500).send(err + " not found");
        }
      );
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
