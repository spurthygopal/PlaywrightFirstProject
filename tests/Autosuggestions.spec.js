import { test } from "@playwright/test";
test("Auto Sugestions", async ({page}) => {
    await page.goto("https://www.flipkart.com/")
    let searchBox =  page.locator("//input[@type='text']")
    await searchBox.fill('iphone')
    await page.waitForTimeout(1000)
    const suggestions = pause().page.locator("//div[@class='YGcVZO']").allInnerTexts();

    // const a = suggestions.nth(1);
    // console.log(a);
    
    // const sugg = await suggestions.allInnerTexts()
    console.log(suggestions.length);
    
    // for(const k of sugg){
    //     console.log(k);
    // }
    
})