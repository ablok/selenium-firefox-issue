# selenium-firefox-issue

There seems to be an issue with Firefox in combination with Selenium Docker grid.
This repo shows the issue. Clone it, run `npm install` and then:
1. Run `npm test` to run using local browsers on the local machine. If you have all browsers installed (Edge requires manual installation), the test should pass on every browser.
2. Now run `npm test:grid` to run the same test on the same browsers but on the Selenium Grid. For me the Firefox one is failing.

I tried adding some console.log statements and the point it fails is in the `driver.quit()` command.
I normally use WebdriverIO and there I see that something seems to goes wrong in the DeleteSession command.

I hope this helps.