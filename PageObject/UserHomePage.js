const { expect } = require('@playwright/test');
class UserHomePage{
    constructor(page){
        this.page = page;
        this.KeyboardMajorTab = page.locator("//a[@data-target='#keyboard']");
        // this.KeyboardQtyButton = page.locator("//div[@class='products']/h6[.='Lenovo3328']/following-sibling::input[@name='quantity']");
        this.KeyboardQty = (ProductName) => page.locator("//div[@class='products']/h6[.='"+ProductName+"']/following-sibling::input[@name='quantity']");
        this.KeyboardAdd= (ProductName)=>page.locator("//div[@class='products']/input[@value='"+ProductName+"']/following-sibling::input[2][@value='Add']");
        this.MouseMajorTab = page.locator("//a[@data-target='#mouse']");
        this.MouseAddButton = page.locator("//div[@class='products']/h6[.='logiteck wireless mouse_3465']/following-sibling::input[@value='Add']");
        this.MouseQtyButton = page.locator("//div[@class='products']/h6[.='logiteck wireless mouse_3465']/following-sibling::input[@name='quantity']");
        this.SelectCustomer = page.locator(`//select[@name='customer']`);
        this.Submitbtn = page.locator(`//button[text()='SUBMIT']`);
        this.EnterCash = page.locator("//input[@id='txtNumber']");
        this.ProceedtoPayment = page.locator("//button[text()='PROCEED TO PAYMENT']");
    }

    async AddItemName(ProductName){
        await this.page.locator('//input[@value="'+ProductName+'"]').click()
    }
    async KeyboardSale( ProductName){

        await this.KeyboardMajorTab.click();
        await this.KeyboardQty(ProductName).fill('2')
        await this.KeyboardAdd(ProductName).click();


        //await expect(this.AddItemName(ProductName)).toBeVisible();
        // await this.AddItemName(ProductName).click();
        //await this.QtyButton.fill(Qty);
        //await this.AddButton.click();
        
    }

    async MouseSale(ProductName,Qty){
        await this.MouseMajorTab.click();
        await this.AddItemName(ProductName).QtyButton.fill(Qty).AddButton.click()
    }
    async CustomerName(Cash){
        await this.SelectCustomer.selectOption('Gabber');
        await this.Submitbtn.click();
        await this.EnterCash.fill(Cash);
        await this.ProceedtoPayment.click();
    }

}
export default UserHomePage;

//div[@id='modal-deletex2']/div/div/div[3]/button[@name='delete_admin']

//div/input[contains(@value, 'Sachin')]/../following-sibling::div/button[text()='Delete']