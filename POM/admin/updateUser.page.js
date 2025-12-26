class UpdateUser{
    constructor(page){
        this.addressTF = page.locator("//textarea[@name='address']")
        this.saveBtn = page.getByRole("button", {name: "Save changes"})
        this.genderDD = page.locator("//select[@name='gender']")
    }

    async updateAddres(address){
        await this.addressTF.fill(address)
        await this.saveBtn.click()
    }

    async getGender(){
        let gender = await this.genderDD.innerText()
        return gender
    }

}

export default UpdateUser
