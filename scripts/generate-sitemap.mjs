import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const catalogPath = resolve(root, 'src/cat/ALL.jsx');
const outputPath = resolve(root, 'public/sitemap.xml');

const catalogSource = readFileSync(catalogPath, 'utf8');
const productIds = [...catalogSource.matchAll(/id:\s*'([^']+)'/g)].map((match) => match[1]);
const uniqueProductIds = [...new Set(productIds)].sort();

const today = new Date().toISOString().slice(0, 10);

const urlEntries = [
  { loc: 'https://sssafetysolutions.pk/', changefreq: 'weekly', priority: '1.0' },
  { loc: 'https://sssafetysolutions.pk/about-us', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://sssafetysolutions.pk/services', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://sssafetysolutions.pk/contact', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://sssafetysolutions.pk/products', changefreq: 'weekly', priority: '0.9' },
  ...uniqueProductIds.map((id) => ({
    loc: `https://sssafetysolutions.pk/products/${id}`,
    changefreq: 'monthly',
    priority: '0.6',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(outputPath, xml, 'utf8');