const test = require("node:test");
const assert = require("node:assert/strict");
const puppeteer = require("puppeteer");

const { MAIN_URL } = require("../config/index.js");

async function testNegativePassword() {
    // Initialize Puppeteer and open a new browser instance
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        // Navigate to the testing page
        await page.goto(MAIN_URL);
    
        // Wait for the page to load and display the login form
        await page.waitForSelector("#username");
        await page.waitForSelector("#password");
    
        // Fill in the login form with incorrect password
        await page.type("#username", "student");
        await page.type("#password", "incorrectPassword");
    
        // Click the login button and wait for error message
        await Promise.all([
            page.waitForSelector("#error"),
            page.click("#submit")
        ]);
    
        // Verify error message is displayed
        const errorMessage = await page.$("#error");
        assert(errorMessage, "Error message not found");
    
        // Verify error message text
        const errorText = await page.$eval("#error", el => el.textContent.trim());
        assert.strictEqual(errorText, "Your password is invalid!", "Error message text is incorrect");

    } finally {
        // Close the page to avoid memory leaks
        await page.close();

        // Close the browser to avoid memory leaks
        await browser.close();
    }
}

test("Negative Password Test", async () => await testNegativePassword());