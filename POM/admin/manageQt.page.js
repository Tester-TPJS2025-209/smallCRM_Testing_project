class quote{
    constructor(page){
        this.view = page.locator("//td[.="+`${num}`+"]/following-sibling::td/descendant::button[.='View']")
    }

    async viewAction(num){
        await this.view.click()
    }

}

export default quote