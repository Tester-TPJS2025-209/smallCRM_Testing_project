class manageQtUser{
    constructor(page){
        this.remarkTxtBox = page.locator("//textarea[@name = 'adminremark']")
        this.submitBtn = page.locator("//input[@name='remark']")
    }

    async remark(remarks){
        await this.remarkTxtBox.fill(remarks)
        await this.submitBtn.click()
    }
}

export default manageQtUser
