class login{
    constructor(page){
        this.page=page;
        this.un=page.locator("//input[@id='username']");
        this.pwd=page.locator("//input[@id='password']");
        this.submitbutton=page.locator("//button[@id='submit']");
    }
    async urll(){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }
    async logininto(u,p){
        await this.un.fill(u);
        await this.pwd.fill(p);
        await this.submitbutton.click();
    }

}
export default login