// generate-sitemap.mjs
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://www.islte.ae';

const staticRoutes = [
  '/',
  '/products',
  '/about',
  '/after-sale-services',
  '/career',
  '/contact',
];

const logosSource = readFileSync(join(__dirname, '../src/data/productLogos.ts'), 'utf-8');
const idMatches = [...logosSource.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);

const productRoutes = idMatches.map(id => `/product/${id}`);
const allRoutes = [...staticRoutes, ...productRoutes];

const urlsXml = allRoutes
  .map(route => `  <url><loc>${SITE_URL}${route}</loc></url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

writeFileSync(join(__dirname, '../public/sitemap.xml'), sitemap);
console.log(`sitemap.xml generated with ${allRoutes.length} URLs`);