import {test, expect} from "@playwright/test"
import LandingPage from "../POM/landinPage.page.js"
import AdminPage from "../POM/admin/adminPage.page.js"
import HomePageAdm from "../POM/admin/homepage.page.js"
import logindetails from "../testData/logindetails.json"
import manageQtUser from "../POM/admin/manageQtuser.page.js"
import quote from "../POM/admin/manageQt.page.js"

// import path from "node:path"

test("Manage Quotes", async({page})=>{
    let adminUsername = logindetails.adminUsername
    let adminPassword = logindetails.adminPassword
    let url = logindetails.url
    let qNumber = 24

    await page.goto(url)

    let landingPg = new LandingPage(page)
    let loginPg = new AdminPage(page)
    let homePg = new HomePageAdm(page)
    let manageQtUserPage = new manageQtUser(page)
    let quotesPage = new quote(page, qNumber)

    await landingPg.adminPage()

    await loginPg.login(adminUsername, adminPassword)

    await homePg.manageQt.click()

    await quotesPage.viewAction()

    page.once("dialog", async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })
    await manageQtUserPage.remark("The services will cost rs.30000")

    await homePg.logout()

})