"use strict";

describe("anonmd", () => {
    it("Should load a single anonymous module", async () => {
        await page.goto(require.resolve("./specimens/simple.html"));

        await expect(page.evaluate(() => document.body.innerHTML)).resolves.toMatchSnapshot();
    });
});
