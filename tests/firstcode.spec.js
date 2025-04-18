import { test,expect } from "@playwright/test"
test("Automate LoginPage of DemoappsQspider", async({page})=> {
    await page.goto("https://demoapps.qspiders.com/")
    await page.locator("//p[text()='UI Testing Concepts']").click()
    // await page.locator("//input[@name='name']").fill("Qspiders")
    // await page.locator("//input[@name='email']").fill("Qspiders@123")
    // await page.locator("//input[@name='password']").fill("Qspiders@123")
    // await page.locator("//button[@type='submit']").click()
    await page.locator("//section[text()='Dropdown']").click()
    // page.locator("#//section[text()='Dropdown']").selectOption("//option[@value='+92']").click();

    // await page.selectOption("#//section[text()='Dropdown']", "//option[@value='+92']").click();
    await page.selectOption("//select[@class = 'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150']", "Female")
    // await page.selectOption("#//select[@id='select3']", "//option[@value='India']").click();
    // await page.selectOption("#//select[@id='select5']", "//option[@id='optionState']").click();
    // await page.selectOption("#//select[@id='select7']", "//option[@value='3']").click();
    // await page.locator("//button[@type='submit']").click()

    // await page.selectOption('#dropdownId', 'optionValue');

    // expect usage 
// await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")
// await expect(page).toHaveTitle("Test Login | Practice Test Automation")

})

