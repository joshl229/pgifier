const puppeteer = require('puppeteer');

let scrape = async () => {
    //Actual Scraping goes here...
    // Return a value
    const browser = await puppeteer.launch();
    //headless is false
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
    await page.waitFor(1000);

    //Scrape logic

    browser.close();
    return result;
};


scrape().then((value) => {
    console.log(value);
});
