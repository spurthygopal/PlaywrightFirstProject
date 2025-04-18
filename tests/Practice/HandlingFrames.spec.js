import {test} from "@playwright/test"
/*test("Single Frames", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0");
    let frame = await page.frameLocator('//iframe[@class="w-full h-96"]');
    await frame.locator("//input[@id='username']").fill("admin");
    await frame.locator("//input[@id='password']").fill("admin123");
    await frame.locator('//span[@class="passwordEye"]').click();
    await frame.getByRole('button', { name: 'Login' }).click();
    
})*/

test("Multiple Frames", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2");
    let frame_1 = await page.frameLocator('(//iframe[@class="w-full h-96"])[1]');
    await frame_1.locator("//input[@id='email']").fill("Admin@gmail.com");
    // frame_1.locator("//input[@id='email']").fill("Admin@gmail.com");
    
})