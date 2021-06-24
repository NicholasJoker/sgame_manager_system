const executablePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const account = '11111111';
const password = '22222222';
const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: {width: 1366, height: 768},
        executablePath,
        headless: false,
    });
    const page = (await browser.pages())[0];
    try {
        await page.goto('https://mp.weixin.qq.com/');
        await page.click('#header > div.banner > div > div > div.login__type__container.login__type__container__scan > a');
        await page.type('#header > div.banner > div > div > div.login__type__container.login__type__container__account > form > div.login_input_panel > div:nth-child(1) > div > span > input', account)
        await page.type('#header > div.banner > div > div > div.login__type__container.login__type__container__account > form > div.login_input_panel > div:nth-child(2) > div > span > input', password)
        await page.click('#header > div.banner > div > div > div.login__type__container.login__type__container__account > form > div.login_btn_panel > a')
        // await page.waitForNavigation()
        // await page.click('#menuBar > dl:nth-child(3) > dd:nth-child(2) > a')
    } finally {
        await browser.close();
    }
})();