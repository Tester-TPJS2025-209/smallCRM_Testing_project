class AdminPage{
    constructor(page){
        this.username = page.locator("#txtusername")
        this.password = page.locator("#txtpassword")
        this.loginBtn = page.getByRole("button", {nmae: "Login"})
    }    

    async login(usn, pwd){
        await this.username.fill(usn)
        await this.password.fill(pwd)
        await this.loginBtn.click()
    }
}

export default AdminPage