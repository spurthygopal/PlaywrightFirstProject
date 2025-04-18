import { test } from "@playwright/test";
import LoginPage from "../../PageObject/LoginPage.js";
import CustomerModule from "../../PageObject/CustomerModule.js";
// import LoginPage from "../PageObject/LoginPage.js";
test("Admin Login", async({page})=>{
    let  lp= new LoginPage(page);
    await lp.url();
    await lp.AdminloginPage("unguardable","admin")
    let cust=new CustomerModule(page)
    await cust.CreateCustomer("Gabber","Singh","2348234");
    

})

