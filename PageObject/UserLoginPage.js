class UserloginPage{
    constructor(page){
        this.page = page;
        this.url = page.goto("http://49.249.28.218:8081/AppServer/Sales_And_Inventory_System/pages/login.php");
        this.username = page.locator("//input[@name='user']");
        this.password = page.locator("//input[@name='password']");
        this.submitbtn = page.locator("//button[@name='btnlogin']");
    }
    
    async UserloginPage1(username,password){

        await this.url;
        await this.username.fill(username);
        await this.password.fill(password);
        // await this.page.waitForSelector(this.submitbtn);
        await this.submitbtn.click();
    }
}
export default UserloginPage