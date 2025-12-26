class LandingPage{
    constructor(page){
        this.signUp = page.getByRole("link",{name: "User Sign Up"})
        this.login = page.getByRole("link", {name: "User Log In"})
        this.admin = page.getByRole("link", {name: "Admin"})
    }

    async signUpPage(){
        await this.signUp.click()
    }

    async loginPage(){
        await this.login.click()
    }

    async adminPage(){
        await this.admin.click()
    }
}

export default LandingPage