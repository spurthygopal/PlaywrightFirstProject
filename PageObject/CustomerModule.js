class CustomerModule{
    constructor(page){
        this.page=page;
        this.CustomerModuleTab = page.locator("(//i[@class='fas fa-fw fa-user'])[1]");
        this.CustomerAddBtn = page.locator("//i[@class='fas fa-fw fa-plus']");
        this.AddCustomerModal_fn = page.locator("(//input[@placeholder='First Name'])[1]");
        this.AddCustomerModal_ln = page.locator("(//input[@name='lastname'])[1]");
        this.AddCustomerModal_PhNo = page.locator("(//input[@name='phonenumber'])[1]");
        this.AddCustomerModal_SaveBtn = page.locator("(//button[@class='btn btn-success'])[1]");
        //Search Context
        this.SearchCustomer = page.locator("//input[@class='form-control form-control-sm']");
        this.this.SearchBox = page.locator("//input[@class='form-control form-control-sm']");
        // this.SearchElement = page.locator(`//td[text()=${SearchText}]`);
        
    }
    async CreateCustomer(fn,ln,phno){
        await this.page.waitForTimeout(3000);
        await this.CustomerModuleTab.click();
        await this.CustomerAddBtn.click();
        await this.AddCustomerModal_fn.fill(fn);
        await this.AddCustomerModal_ln.fill(ln);
        await this.AddCustomerModal_PhNo.fill(phno);
        await this.AddCustomerModal_SaveBtn.click();
    }
    


}
export default CustomerModule;