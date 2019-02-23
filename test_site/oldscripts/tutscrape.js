const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://books.toscrape.com/');
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
        let title = document.querySelector('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(6) > article > div.product_price > p.price_color').innerText;
        let price = document.querySelector('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(6) > article > div.product_price > p.instock.availability > i').innerText;

        return {
            title,
            price
        }

    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});
