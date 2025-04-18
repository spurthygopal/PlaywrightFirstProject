import { test } from "@playwright/test";
test("keyboardCode",async ({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // const un =  page.getElementById("//b[text()='student'])[1]")
    // const untext = un.textContent
    // page.getByText("(//b[text()='student'])[1]")
    const un =  page.locator("(//b[text()='student'])[1]").textContent
    // const pwd =  page.getByText("(//b[text()='Password123'])[1]")
    console.log(`username is ${un} and Password is {pwd}`);
    
    /*await page.locator("//input[@id='username']").click()
    await page.keyboard.type("student")
    // await page.locator("//input[@id='password']").click()
    // await page.keyboard.insertText("Password123")
    const time = new Date().getTime();
    console.log(time);
    await page.screenshot({path:`test-results/Screenshots/page-${time}.png`}) 
    // const time1 = new Date().getTime();
    // console.log(time1);
    // await page.screenshot({path:`test-results/Screenshots/page-${time1}.png`}) 
    */

})