class signup{
    constructor(page){
        this.usernameTextField = page.locator("input#name")
        this.emailidTextField = page.locator("input#email")
        this.passwordTextField = page.locator("input#password")
        this.confirmTextField = page.locator("input#cpassword")
        this.contactnoTextField = page.locator("input#txtpassword")
        this.maleRadiobutton = page.locator("//input[@value = 'm']")
        this.femaleRadiobutton = page.locator("//input[@value = 'f']")
        this.submitButton = page.getByRole("button", {name: "Submit"})
    }

    async signup(username, email, password, contact){
        await this.usernameTextField.fill(username)
        await this.emailidTextField.fill(email)
        await this.passwordTextField.fill(password)
        await this.confirmTextField.fill(password)
        await this.contactnoTextField.fill(contact)
        await this.maleRadiobutton.click()
        await this.submitButton.click()
    }
}
export default signup