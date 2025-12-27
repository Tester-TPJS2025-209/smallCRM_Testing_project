import {test, expect} from "@playwright/test"
import LandingPage from "../POM/landinPage.page.js"
import AdminPage from "../POM/admin/adminPage.page.js"
import HomePageAdm from "../POM/admin/homepage.page.js"
import logindetails from "../testData/logindetails.json"
import Users from "../POM/admin/usersPage.page.js"
import UpdateUser from "../POM/admin/updateUser.page.js"
// import path from "node:path"

test("User updation by admin", async({page})=>{
    let adminUsername = logindetails.adminUsername
    let adminPassword = logindetails.adminPassword
    let url = logindetails.url
    let email = logindetails.email

    await page.goto(url)

    let landingPg = new LandingPage(page)
    let loginPg = new AdminPage(page)
    let homePg = new HomePageAdm(page)
    let usersPage = new Users(page, email)
    let UpdateUserPage = new UpdateUser(page)

    await landingPg.adminPage()

    await loginPg.login(adminUsername, adminPassword)

    await homePg.users.click()

    await usersPage.viewEdit()

    page.once("dialog", async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })
    await UpdateUserPage.updateAddres("Egypt")

    console.log(await UpdateUserPage.getGender())
    await expect.soft(await UpdateUserPage.getGender()).toHaveText("Male")

    await homePg.logout()
})