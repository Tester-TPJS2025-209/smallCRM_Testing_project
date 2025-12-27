import {test, expect} from "@playwright/test"
// import signup from "../POM/users/signup.page.js"
import login from "../POM/users/login.page.js"
import dashboard from "../POM/users/dashboard.page.js"
// import profile from "../POM/users/profile.page.js"
import changePass from "../POM/users/cpassword.page.js"
import LandingPage from "../POM/landinPage.page.js"
import logindetails from "../testData/logindetails.json"



test.skip("loginlogout", async({page})=>{
    
    let url = logindetails.url
    let email = logindetails.email
    let password = logindetails.password
    let address = logindetails.adress
    let newPass = logindetails.newPassword

    await page.goto(url)

    let Landing = new LandingPage(page)
    let loginPage = new login(page)
    let homePage = new dashboard(page)
    // let profilePage = new profile(page)
    let passPage = new changePass(page)

    await Landing.loginPage()
    await loginPage.loginAct(email, password)
    await homePage.logout()

})
