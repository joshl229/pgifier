// http://www.humansofnewyork.com/
//
//


const puppeteer = require('puppeteer');


let scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://www.humansofnewyork.com/');
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
    //Getting a sample text from hony
    let text = document.querySelector('body > div.main-wrapper > div.post-container > div:nth-child(2) > div.post-text > p').textContent;


    return { 
        text
    }
});
    browser.close();
    return result;
};
scrape().then((value) => {
        console.log(value);
});
