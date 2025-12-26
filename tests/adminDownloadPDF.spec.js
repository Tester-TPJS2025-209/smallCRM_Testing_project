import {test, expect} from "@playwright/test"
import LandingPage from "../POM/landinPage.page.js"
import AdminPage from "../POM/admin/adminPage.page.js"
import HomePageAdm from "../POM/admin/homepage.page.js"
import logindetails from "../testData/logindetails.json"

test("download pdf", async({page})=>{
    let adminUsername = logindetails.adminUsername
    let adminPassword = logindetails.adminPassword
    let url = logindetails.url

    await page.goto(url)

    let landingPg = new LandingPage(page)
    let loginPg = new AdminPage(page)
    let homePg = new HomePageAdm(page)

    await landingPg.adminPage()

    await loginPg.login(adminUsername, adminPassword)

    await homePg.downloadChart.dispatchEvent("click")
    await homePg.downPdf.dispatchEvent("click")

})