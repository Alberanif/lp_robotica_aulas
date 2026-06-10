import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, "dist");

const MIME_TYPES = {
  ".js": "application/javascript",
  ".css": "text/css",
  ".html": "text/html",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".woff2": "font/woff2",
};

// Serve pre-compressed .gz files if available
app.use((req, res, next) => {
  const acceptEncoding = req.headers["accept-encoding"] || "";
  if (!acceptEncoding.includes("gzip")) return next();

  const gzPath = path.join(DIST, req.path + ".gz");
  if (!gzPath.startsWith(DIST + path.sep)) return next();
  if (!fs.existsSync(gzPath)) return next();

  const ext = path.extname(req.path);
  if (MIME_TYPES[ext]) res.setHeader("Content-Type", MIME_TYPES[ext]);
  res.setHeader("Content-Encoding", "gzip");
  res.setHeader("Vary", "Accept-Encoding");
  req.url = req.url + ".gz";
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
