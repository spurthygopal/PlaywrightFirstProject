class LoginPage{
    constructor(page){
        this.page = page;
        this.un = page.locator("//input[@name='user']");
        this.pwd = page.locator("//input[@name='password']");
        this.loginButton = page.locator("//button[@name='btnlogin']");
    }
    async url(){
        await this.page.goto("http://49.249.28.218:8081/AppServer/Sales_And_Inventory_System/pages/login.php");
    }
    async AdminloginPage(username,password){
        await this.un.fill(username);
        await this.pwd.fill(password);
        await this.loginButton.click();
    }
    async UserloginPage(username, password){
        await this.un.fill(username);
        await this.pwd.fill(password);
        await this.loginButton.click();
    }
}

export default LoginPage;