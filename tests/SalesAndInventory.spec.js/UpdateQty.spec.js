import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://49.249.28.218:8081/AppServer/Sales_And_Inventory_System/pages/login.php');
  await page.getByRole('textbox', { name: 'Username' }).fill('unguardable');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Inventory' }).click();
  await page.getByRole('row', { name: '1112 logiteck wireless' }).getByRole('link').click();
  await page.locator('td:nth-child(8) > .btn').first().click();
  await page.getByRole('textbox', { name: 'Quantity' }).click();
  await page.getByRole('textbox', { name: 'Quantity' }).fill('10');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: ' Update' }).click();
  await page.getByRole('button', { name: 'Prince Ly Cesar' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});