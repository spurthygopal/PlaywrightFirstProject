import { test } from "@playwright/test";
import excel from "exceljs";

test("Read Data", async()=>{
    const book1 = new excel.Workbook();
    await book1.xlsx.readFile('./testdata/DataDriven.xlsx');
    let sheet = book1.getWorksheet('Sheet1');
    let data = sheet.getRow(1).getCell(1).toString();
    console.log(data);
    
})
test('Write Data', async()=>{
    let book2 = new excel.Workbook();
    await book2.xlsx.readFile('./testdata/DataDriven.xlsx');
    let sheet1=book2.getWorksheet('Sheet1');
    sheet1.getRow(1).getCell(1).value='xyz';
    await book2.xlsx.writeFile('testdata/DataDriven.xlsx');
})
test("Read Multiple Data", async()=>{
    let book3 = new excel.Workbook();
    await book3.xlsx.readFile('./testdata/DataDriven.xlsx');
    let sheet2 = book3.getWorksheet('Sheet1');
    console.log(`Row Name ${sheet2.getRow(1).toString()}`);
    for(let j=2; j<=5; j++){
        let data = sheet2.getRow(j).getCell(1).toString();
        console.log(`Usernames are  ${data}`);
    }
    console.log(`Row Name ${sheet2.getRow(2).toString()}`);
    for(let j=2; j<=5; j++){
        let data = sheet2.getRow(j).getCell(2).toString();
        console.log(`Passwords are  ${data}`);
    }
})