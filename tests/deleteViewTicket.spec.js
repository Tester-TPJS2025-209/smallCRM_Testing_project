import {test} from "@playwright/test"
import signup from "../POM/users/signup.page.js"
import login from "../POM/users/login.page.js"
import dashboard from "../POM/users/dashboard.page.js"
import LandingPage from "../POM/landinPage.page.js"
import logindetails from "../testData/logindetails.json"

test("view Ticket", async({page})=>{
    let url = logindetails.url
    let email = logindetails.email
    let contact = logindetails.contact
    let password = logindetails.password
    let username = logindetails.username

    await page.goto(url)

    let Landing = new LandingPage(page)
    let signupPage = new signup(page)
    let loginPage = new login(page)
    let homePage = new dashboard(page)

    // await Landing.signUpPage()

    // await signupPage.signup(username, email, password, contact)

    // page.once("dialog", async(dialog)=>{
    //     console.log(await dialog.message())
    //     await dialog.accept()
    // })

    
    await Landing.loginPage()

    //Login to the application
    await loginPage.loginAct(email, password)

    //click on the 'x' to remove the View Tickets card 
    await homePage.vtremove.dispatchEvent('click')

    //take screenshot
    await page.screenshot({path: "Screenshot/viewTicketsRemoved.png"})

    //logout of the application
    await homePage.logout()

})



