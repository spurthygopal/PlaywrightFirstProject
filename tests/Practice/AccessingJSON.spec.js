import { test } from "@playwright/test";
// let data = require("../testdata/ObjData.json");
let data = require("C:/Users/Dell/Desktop/TekPyramid/Playwright/testdata/ObjData.json");

data.forEach((obj, i)=> {
    test(`Multiple Object ${i}`, async()=>{
        console.log(obj.username);
        console.log(obj.Password);
        
    })
})
