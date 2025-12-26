class Quote{
    constructor(page){
        this.company = page.locator("//input[@name='company']")
        this.query = page.locator("//textarea[@name='query']")
        this.update = page.locator(".btn.btn-primary.pull-right")
        this.clearForm = page.locator(".btn.btn-default")   
    }

    async data(company, queryText){
        await this.company.fill(company)
        await this.query.fill(queryText)
        
    }

    async services(page, options){
        for(let opt of options){
            await page.getByRole("checkbox", {name: `${opt}`}).check()
        }
        await this.update.click()
    }
}

export default Quote