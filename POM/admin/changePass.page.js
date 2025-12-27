class ChangePass{
    constructor(page){
        this.oldPassTF = page.locator("#oldpass")
        this.newPassTF = page.locator("#newpass")
        this.confirmPassTF = page.locator("#confirmpassword")
        this.changebtn = page.locator(".btn.btn-primary.pull-right")
    }

    async changePassword(oldPass, newPass){
        await this.oldPassTF.fill(oldPass)
        await this.newPassTF.fill(newPass)
        await this.confirmPassTF.fill(newPass)
        await this.changebtn.click()
    }

}

export default ChangePass