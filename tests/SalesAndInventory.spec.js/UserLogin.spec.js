import { test } from "@playwright/test";
import UserloginPage from "../../PageObject/UserLoginPage.js";
// import credentials from "../../testdata/ObjData.json" assert { type: "json" };
let credentials = require("../../testdata/ObjData.json");
test("User Page", async ({page})=> {
    let usnlg = new UserloginPage(page);
    // await usnlg.url();"
    // require{"testdata/ObjData.json"};
    await usnlg.UserloginPage1(credentials.usn, credentials.pwd);
})