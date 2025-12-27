class HomePageAdm{
    constructor(page){
        this.cpassword = page.getByRole("link", {name: "Change Password"})
        this.users = page.getByRole("link", {name: "Users"})
        this.manageTkt = page.getByRole("link", {name: "Manage Ticket"})
        this.manageQt = page.getByRole("link", {name: "Manage Quotes"})
        this.settings = page.locator(".iconset.top-settings-dark ")
        this.logoutBtn = page.getByRole("link", {name: "Log Out"})
        this.downloadChart = page.locator(".highcharts-button.highcharts-contextbutton")
        this.downPdf = page.locator("//div[.='Download PDF document']")
    }

    async logout(){
        await this.settings.click()
        await this.logoutBtn.click()
    }
}

export default HomePageAdm