import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, "dist");

// Serve pre-compressed .gz files if available
app.use((req, res, next) => {
  const acceptEncoding = req.headers["accept-encoding"] || "";
  if (!acceptEncoding.includes("gzip")) return next();

  const gzPath = path.join(DIST, req.path + ".gz");
  if (fs.existsSync(gzPath)) {
    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Vary", "Accept-Encoding");
    req.url = req.url + ".gz";
  }
  next();
});

// Fallback gzip for assets without pre-compressed versions
app.use(compression({ level: 6 }));

app.use(
  express.static(DIST, {
    maxAge: "1y",
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html") || filePath.endsWith(".html.gz")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
