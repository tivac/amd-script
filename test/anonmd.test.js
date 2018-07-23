"use strict";

describe("anonmd", () => {
    it("Should load a single anonymous module", async () => {
        await page.goto(require.resolve("./specimens/simple.html"));

        await expect(page.$eval("#output", (el) => el.innerHTML)).resolves.toMatchSnapshot();
    });
    
    it("Should support module dependencies", async () => {
        await page.goto(require.resolve("./specimens/dependencies.html"));

        await expect(page.$eval("#output", (el) => el.innerHTML)).resolves.toMatchSnapshot();
    });
});
