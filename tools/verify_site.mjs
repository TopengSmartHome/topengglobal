import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const productNames = (await readdir(join(root, "products"))).filter(name => name.endsWith(".html"));
const pages = [join(root, "index.html"), ...productNames.map(name => join(root, "products", name))];
const missing = [];
let schemaCount = 0;

for (const page of pages) {
  const html = await readFile(page, "utf8");
  for (const match of html.matchAll(/<(?:img|script|link|a)\b[^>]*(?:src|href)="([^"]+)"/gi)) {
    const value = match[1];
    if (value.includes("${")) continue;
    if (/^(?:https?:|mailto:|tel:|#|javascript:)/i.test(value)) continue;
    const target = resolve(dirname(page), decodeURIComponent(value.split(/[?#]/)[0]));
    try { await stat(target); } catch { missing.push({ page, value }); }
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    JSON.parse(match[1]);
    schemaCount += 1;
  }
}

if (productNames.length !== 7) throw new Error(`Expected 7 product pages, found ${productNames.length}`);
if (missing.length) throw new Error(`Missing local references: ${JSON.stringify(missing)}`);
console.log(JSON.stringify({ pages: pages.length, productPages: productNames.length, schemaCount, missing: 0 }));
