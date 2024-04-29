const { Builder, Browser, By, until } = require("selenium-webdriver");

describe("Selenium", async () => {
    [Browser.CHROME, Browser.FIREFOX, Browser.EDGE].forEach((browser) => {
        it(`${browser} should work correctly`, async function () {
            this.timeout(60000);

            const builder = new Builder().forBrowser(browser);
            if (process.env.GRID) {
                builder.usingServer("http://localhost:4444/wd/hub");
            }
            let driver = await builder.build();

            await driver.get("https://the-internet.herokuapp.com/login");
            await driver.findElement(By.id("username")).sendKeys("tomsmith");
            await driver
                .findElement(By.id("password"))
                .sendKeys("SuperSecretPassword!");
            await driver.findElement(By.css("button[type='submit']")).click();
            await driver.wait(
                until.elementLocated(By.xpath("//h2[text()=' Secure Area']"))
            );
            await driver.quit();
        });
    });
});
