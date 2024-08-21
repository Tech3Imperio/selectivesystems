import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// URLs to include in the sitemap
const urls = [
  { url: "/", changefreq: "daily", priority: 0.8 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/products", changefreq: "monthly", priority: 0.8 },
  { url: "/products/aluminium-windows", changefreq: "monthly", priority: 0.8 },
  { url: "/products/door-seals", changefreq: "monthly", priority: 0.8 },
  { url: "/products/railings", changefreq: "monthly", priority: 0.8 },
  { url: "/products/queue-manager", changefreq: "monthly", priority: 0.8 },
  { url: "/products/invisible-grill", changefreq: "monthly", priority: 0.8 },
  { url: "/products/office-partitions", changefreq: "monthly", priority: 0.8 },
  {
    url: "/products/bathroom-partitions",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
  // Add more URLs as needed
];

const __filename = fileURLToPath(import.meta.url);
const _dirname = dirname(__filename);

console.log("Generating sitemap...");

const sitemap = new SitemapStream({ hostname: "https://selectivesystems.in/" });

// Write URLs to sitemap
urls.forEach((url) => sitemap.write(url));
sitemap.end();

// Write sitemap.xml file
streamToPromise(sitemap)
  .then((data) => {
    console.log("Sitemap generated successfully.");
    createWriteStream(resolve(_dirname, "public", "sitemap.xml")).write(
      data.toString()
    );
  })
  .catch((err) => {
    console.error("Error generating sitemap", err);
  });
