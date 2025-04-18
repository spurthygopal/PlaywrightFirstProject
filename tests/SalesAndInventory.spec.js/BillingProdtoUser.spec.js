import { test, expect} from "@playwright/test";
import UserloginPage from "../../PageObject/UserLoginPage.js";
import UserHomePage from "../../PageObject/UserHomePage.js";

test("Billing Product to the Customer", async({page})=>{
    

    test.setTimeout(60000)

    let usnlg = new UserloginPage(page);
    await usnlg.UserloginPage1("test", "test");
    const BillingProd = new UserHomePage(page);
    await BillingProd.KeyboardSale("Lenovo3328");
    await page.waitForTimeout(5000)
   // await BillingProd.MouseSale("logiteck wireless mouse_9","1");
    //await BillingProd.CustomerName("20000");
})