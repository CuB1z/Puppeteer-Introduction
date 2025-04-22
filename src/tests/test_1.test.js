const test = require("node:test");
const assert = require("node:assert/strict");
const puppeteer = require("puppeteer");

const { MAIN_URL, LOGGED_IN_URL } = require("../config/index.js");

async function testLogin() {
	// Initialize Puppeteer and open a new browser instance
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	try {
		// Navigate to the testing page
		await page.goto(MAIN_URL);
	
		// Wait for the page to load and display the login form
		await page.waitForSelector("#username");
		await page.waitForSelector("#password");
	
		// Fill in the login form
		await page.type("#username", "student");
		await page.type("#password", "Password123");
	
		// Click the login button and wait for navigation
		await Promise.all([
			page.waitForNavigation({ timeout: 5000 }),
			page.click("#submit")
		]);
	
		// Check if the URL is the expected one after login
		const currentUrl = page.url();
		assert.strictEqual(currentUrl, LOGGED_IN_URL, "URL after login is incorrect");
	
		// Check if the success message is displayed
		const message = await page.$eval(".post-title", el => el.textContent);
		assert(
			message.includes("Congratulations") || message.includes("Logged In Successfully"),
			"Success message not found"
		);
	
		// Check that the Log Out button is displayed on the new page
		const logoutButton = await page.$(".wp-block-button__link");
		assert(logoutButton, "Log Out button not found");

	} finally {
		// Close the page to avoid memory leaks
		await page.close();

		// Close the browser to avoid memory leaks
		await browser.close();
	}
}

test("Login Test", async () => await testLogin());