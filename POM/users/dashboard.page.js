class dashboard{
    constructor(page){
        //page sidebar
        this.dashboard = page.getByRole("link", {name: "Dashboard"})
        this.cPassword = page.getByRole("link", {name: "Change Password"})
        this.profileLink = page.locator("//li[contains(.,'Profile')]")
        this.reqQuoteLink = page.getByRole("link", {name: "Request a Quote"})
        this.createTicketLink = page.getByRole("link", {name: "Create Ticket"})
        this.viewTickertLink = page.getByRole("link", {name: "View Ticket", exact:true})
        //tiles
        this.viewTickets = page.getByRole("link", {name: "View Tickets"})
        this.getQuote = page.getByRole("link", {name: "Get Quote"})
        this.myProfile = page.getByRole("link", {name: "My Profile"})
        this.create = page.getByRole("link", {name: "Create"})
        //tile control reload
        this.vtreload = page.locator("//div[@class='tiles blue added-margin']//a[@class='reload']")
        this.gqreload = page.locator("//div[@class='tiles green added-margin']//a[@class='reload']")
        this.mpreload = page.locator("//div[@class='tiles red added-margin']//a[@class='reload']")
        this.ctreload = page.locator("//div[@class='tiles purple added-margin']//a[@class='reload']")
        //tile control remove
        this.gqremove = page.locator("//div[@class='tiles green added-margin']//a[@class='reload']")        
        this.ctremove = page.locator("//div[@class='tiles purple added-margin']//a[@class='remove']")
        this.vtremove = page.locator("//div[@class='tiles blue added-margin']//a[@class='remove']")
        this.mpremove = page.locator("//div[@class='tiles red added-margin']//a[@class='remove']")
        //settings button
        // this.settings = page.locator("#user-options")
        this.settings = page.locator(".iconset.top-settings-dark")
        this.logoutbtn = page.getByRole("link", {name: "Log Out"})
    }

    async changePass(){
        await this.cPassword.click()
    }

    async profile(){
        await this.profileLink.click()
    }

    async requestQuote(){
        await this.reqQuoteLink.click()
    }

    async ticketCreate(){
        await this.createTicketLink.click()
    }

    async tickets(){
        await this.viewTickertLink.click()
    }

    async logout(){
        // await this.settings.click({force:true, trial:true})
        // await this.settings.dispatchEvent("click")
        await this.settings.dispatchEvent("click")
        await this.logoutbtn.click({force: true})
    }
}

export default dashboard