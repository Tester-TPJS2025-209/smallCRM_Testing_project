class ManageTkt{
    constructor(page){
        this.tkt = page.locator("(//div[@class='grid simple no-border'])[1]")
        this.status = page.locator("(//div[@class='grid simple no-border'])[1]/descendant::span[@class='label label-important']")
        this.replyTB = page.locator("(//div[@class='grid simple no-border'])[1]/descendant::textarea")
        this.updatebtn = page.locator("(//div[@class='grid simple no-border'])[1]/descendant::input[@id='Update']")
    }

    async postReply(remarks){
        await this.tkt.click()
        await this.replyTB.fill(remarks)
        await this.updatebtn.click()
    }

    async getStatus(){
        let statusTxt = await this.status
        return statusTxt
    }

}

export default ManageTkt