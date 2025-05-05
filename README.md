# Puppeteer Introduction 🚀

> **📌 Project Overview**
>
> This is a demonstration project showing how to use Puppeteer for End-to-End (E2E) testing. Puppeteer is a Node.js library that provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. In this project, Puppeteer is used to automate the process of testing web applications by simulating user interactions such as clicking buttons, filling out forms, and navigating through pages.

> ---

> **🔍 More Information**
>
> - [Puppeteer Documentation](https://pptr.dev/) - Official documentation for Puppeteer.
> - [GitHub Repository](https://github.com/CuB1z/Puppetteer-Introduction) - Source code for this project.
> - [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 engine. 

---

## 📦 Dependencies

> **✨ What You Need**
>
> | 🧩 Dependency     | 📝 Description |
> |-------------------|-----------------------------|
> | 🦾 **Chromium**   | The headless browser used by Puppeteer to run your tests. |
> | 🤖 **Puppeteer**  | Node.js library for controlling Chrome/Chromium via DevTools Protocol. |
> | 🟢 **Node.js**    | JavaScript runtime built on Chrome's V8 engine. |
> | 📦 **npm**        | Node's package manager for installing dependencies. |
> 
> Make sure you have all these installed to enjoy smooth and powerful browser automation! 🚦✨

---

## 📋 Installation

> **📦 Steps to Install**
> 
> To get started with this project, you need to install the necessary dependencies. Follow these steps:
> 
> 1. Clone this repository:
>    ```bash
>    git clone https://github.com/CuB1z/Puppeteer-Introduction.git puppeteer-introduction
>    ```
> 2. Navigate to the project directory:
>    ```bash
>    cd puppeteer-introduction
>    ```
> 3. Install the dependencies:
>    ```bash
>    npm install
>    ```

> ---

> **⚠️ Warnings**
> 
> If you encounter any issues during installation, try setting up `SET PUPPETEER_SKIP_DOWNLOAD=true` in your environment variables to skip the Chromium download and use a locally installed version instead.

---

## 🧪 Running Tests

> **🚀 Steps to Run Tests**
> 
> Once you have installed the dependencies, you can run the tests included in this project by following these steps:
> 
> 1. Ensure all dependencies are installed:
>    ```bash
>    npm install
>    ```
> 2. Run the test script:
>    ```bash
>    npm run test
>    ```
> 
> This will execute the test cases defined in the project, leveraging Puppeteer to automate browser interactions. Check the console output for test results and any potential errors.

> ---

> **⚠️ Warnings**
> 
> If you are running tests in a Linux environment, you may need to update the following line in your test scripts
> 
> ```javascript
> // From this:
> const browser = await puppeteer.launch({ headless: false });
> 
> // To this:
> const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
> ```

---

## 🧑‍💻 Usage

> **⚙️ How to Use**
> 
> After installation, you can start using Puppeteer for E2E testing. Here's a simple example of how to launch a headless browser and navigate to a webpage:
> 
> ```javascript
> const puppeteer = require('puppeteer');
> 
> (async () => {
>   const browser = await puppeteer.launch();
>   const page = await browser.newPage();
>   await page.goto('https://example.com');
>   await page.screenshot({ path: 'example.png' });
>   await browser.close();
> })();
> ```
> 
> To run the script, simply execute:
> 
> ```bash
> node yourscript.js
> ```

---

## 📝 License

> **📄 License Information**
>
> This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---