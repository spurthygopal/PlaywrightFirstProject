import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://49.249.28.218:8081/AppServer/Sales_And_Inventory_System/pages/login.php');
  await page.getByRole('textbox', { name: 'Username' }).fill('Unguardable');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Accounts' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('select[name="empid"]').selectOption('70');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('JabbarSingh');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('GabbarSing');
  await page.getByRole('button', { name: ' Save' }).click();
  await page.getByRole('button', { name: 'Prince Ly Cesar' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});