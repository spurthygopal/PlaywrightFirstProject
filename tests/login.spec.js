import { test } from "@playwright/test";
import login from "../PageObject/login.js";

test("Launch the url",async({page})=>{
    let lg = new login(page)
    await lg.urll();
    await lg.logininto("student","password");


})