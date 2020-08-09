import { Request, Response } from "express";

export function homepage(req: Request, res: Response) {
  res.send(`
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/><meta name="viewport" content="width=<device-width>,initial-scale=1"/>
    <title>Ecommerce 1.x</title>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
    </body>
  </html>
  `);
}
