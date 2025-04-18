import { test } from "@playwright/test";

test('Radio Button', async({page})=>{
    // await page.goto('http://49.249.28.218:8081/AppServer/Supply_Chain_Management/');
    // await page.getByLabel('Username').fill('admin');
    // await page.getByLabel('Password').fill('admin123');
    // await page.getByRole('button', { name: 'Sign in' }).click();
    // await page.getByLabel('Login Type').selectText('Admin');
    // await page.locator("//input[@value='Login']").click();

    await page.goto('http://49.249.28.218:8081/AppServer/Supply_Chain_Management/');
//   await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
//   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByLabel('Login Type').selectOption('admin');
  await page.getByRole('button', { name: 'Login' }).click();


})
