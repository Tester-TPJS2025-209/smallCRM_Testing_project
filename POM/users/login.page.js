class login{
    constructor(page){
        this.emalTF = page.locator("#txtusername")
        this.pwdTF = page.locator("#txtpassword")
        this.loginbutton = page.getByRole("button", {name: "Login"})
    }

    async loginAct(email, password){
        await this.emalTF.fill(email)
        await this.pwdTF.fill(password)
        await this.loginbutton.click()
    }

}
export default login