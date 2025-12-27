import {test, expect} from "@playwright/test"
import LandingPage from "../POM/landinPage.page.js"
import AdminPage from "../POM/admin/adminPage.page.js"
import HomePageAdm from "../POM/admin/homepage.page.js"
import logindetails from "../testData/logindetails.json"
import ManageTkt from "../POM/admin/ManageTkt.page.js"
// import path from "node:path"

test("manage ticket", async({page})=>{
    let adminUsername = logindetails.adminUsername
    let adminPassword = logindetails.adminPassword
    let url = logindetails.url

    await page.goto(url)

    let landingPg = new LandingPage(page)
    let loginPg = new AdminPage(page)
    let homePg = new HomePageAdm(page)
    let manageTktPage = new ManageTkt(page)
    await landingPg.adminPage()

    await loginPg.login(adminUsername, adminPassword)

    await homePg.manageTkt.click()

    // await expect.soft(await manageTktPage.getStatus()).toHaveText("Open")

    await page.waitForLoadState('load');

    page.once("dialog", async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })
    await manageTktPage.postReply("The color of the logo will be changes shortly")
    await expect.soft(await manageTktPage.getStatus()).toHaveText("closed")

    // await page.waitForLoadState('networkidle')
    await homePg.logout()
})