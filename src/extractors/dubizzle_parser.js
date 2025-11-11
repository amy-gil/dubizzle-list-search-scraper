onst puppeteer = require('puppeteer');

async function extractPropertyData(page) {
return await page.evaluate(() => {
const propertyElements = document.querySelectorAll('.listing');
const properties = [];
propertyElements.forEach(element => {
const title = element.querySelector('.title').innerText;
const price = element.querySelector('.price').innerText;
const location = element.querySelector('.location').innerText;
const size = element.querySelector('.size').innerText;
const url = element.querySelector('a').href;

properties.push({
title,
price,
location,
size,
url,
});
});
return properties;
});
}

module.exports = { extractPropertyData };