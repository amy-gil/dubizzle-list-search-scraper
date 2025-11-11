onst puppeteer = require('puppeteer');
const { extractPropertyData } = require('./extractors/dubizzle_parser');
const { saveData } = require('./outputs/exporter');
const settings = require('./config/settings.example.json');

async function startScraper() {
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto(settings.searchUrl, { waitUntil: 'domcontentloaded' });
  
let properties = [];
  
for (let i = 0; i < settings.maxPages; i++) {
const pageData = await extractPropertyData(page);
properties = properties.concat(pageData);
if (!await page.$(settings.nextPageSelector)) break;
await page.click(settings.nextPageSelector);
await page.waitForTimeout(1000);
}

await saveData(properties);
await browser.close();
}

startScraper().catch(console.error);