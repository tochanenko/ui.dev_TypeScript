import http, { IncomingMessage, ServerResponse } from 'http';
import path from "path";
import fs from "fs/promises";

async function requitestListener(req: IncomingMessage, res: ServerResponse) {
  const filePath = path.join(__dirname, "static/index.html");

  const data = await fs.readFile(filePath, "utf-8");

  res.writeHead(200, {
    "content-type": "text/html",
    "content-length": data.length
  });
  res.write(data);
  res.end();
}

http.createServer(requitestListener).listen(3000, () => {
  console.log("HTTP Server is listening");
})