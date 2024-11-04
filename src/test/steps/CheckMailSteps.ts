import { Given, When, Then } from '@cucumber/cucumber';
import {chromium, Page, Browser, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('User navigates to the application', async function (){
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto("https://mailsac.com");
});


Given('User enter the mail as {string}', async function (mail){
    await page.locator("input[id='field_a1xtj']").type(mail);
}); 

When('User click on check the mail button', async function(){
    await page.locator("button[class='elementor-button elementor-button-link elementor-size-lg']").click();
});

Then('mail should be created',async function () {
    const mailName =await page.locator("//div[contains(@class, 'ng-scope')]//span[1]");
    await expect(mailName).toBeVisible()
    await browser.close();

     

})