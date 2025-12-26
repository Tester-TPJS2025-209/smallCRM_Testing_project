class ChangePassword{
    constructor(page){
        this.oldPass =  page.locator("#oldpass")
        this.newPass = page.locator("#newpass")
        this.cpass = page.locator("#confirmpassword")
        this.update = page.locator(".btn.btn-primary.pull-right")
        this.clearForm = page.locator(".btn.btn-default")
        this.message = page.locator("//p[contains(., 'Password')]")
    }

    async fillPass(oldPass, newPass){
        await this.oldPass.fill(oldPass)
        await this.newPass.fill(newPass)
        await this.cpass.fill(newPass)
        await this.update.click()
    } 

    async getMessage(){
        let messageTxt = await this.message.innerText()
        return messageTxt
    }
}
export default ChangePassword