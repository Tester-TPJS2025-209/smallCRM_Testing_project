import {test, expect} from "@playwright/test"
// import signup from "../POM/users/signup.page.js"
import login from "../POM/users/login.page.js"
import dashboard from "../POM/users/dashboard.page.js"
// import profile from "../POM/users/profile.page.js"
// import changePass from "../POM/users/cpassword.page.js"
import quote from "../POM/users/quote.page.js"
import LandingPage from "../POM/landinPage.page.js"
import logindetails from "../testData/logindetails.json"

test("add address", async({page})=>{

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
    // let passPage = new changePass(page)
    let getQuote = new quote(page)

    await Landing.loginPage()

    await loginPage.loginAct(email, password)

    await homePage.getQuote.click()

    await getQuote.data("Amazon", "To develop a Ecomm website")

    await getQuote.services(page, ["Website Maintenance", " Ecommerce Development", "Web Hosting Services", "Domain Registration", "Online Payment Integration"])

    // await page.waitForTimeout(2000)
    await page.locator("#user-options").click({trial: true})
    await homePage.dashboard.click()
    await homePage.logout()

})