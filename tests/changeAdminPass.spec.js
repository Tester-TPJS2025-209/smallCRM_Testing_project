import {test, expect} from "@playwright/test"
import LandingPage from "../POM/landinPage.page.js"
import AdminPage from "../POM/admin/adminPage.page.js"
import HomePageAdm from "../POM/admin/homepage.page.js"
import logindetails from "../testData/logindetails.json"
import ChangePass from "../POM/admin/changePass.page.js"
// import path from "node:path"

test("change pass admin", async({page})=>{
    let adminUsername = logindetails.adminUsername
    let adminPassword = logindetails.adminPassword
    let url = logindetails.url

    await page.goto(url)

    let landingPg = new LandingPage(page)
    let loginPg = new AdminPage(page)
    let homePg = new HomePageAdm(page)
    let changePassPage = new ChangePass(page)


    await landingPg.adminPage()

    await loginPg.login(adminUsername, adminPassword)

    await homePg.cpassword.click()

    page.once("dialog", async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })

    await changePassPage.changePassword("admin", "admin") 

    await homePg.logout()

})
