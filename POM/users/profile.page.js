class Profile{
    constructor(page){
        this.userName = page.locator("//input[@name='name']")
        this.alternateEmail = page.locator("//input[@name='alt_email']")
        this.address = page.locator("//textarea[@name='address']")
        this.gender = page.locator("//select[@name='gender']//option").first()
        this.update = page.locator(".btn.btn-primary.pull-right")
        this.reset = page.locator(".btn.btn-default")
    }

    async addAddress(altEmail, adress){
        if(altEmail === null){
            await this.address.fill(adress)
            await this.update.click()
        }else{
            await this.alternateEmail.fill(altEmail)
            await this.address.fill(adress)
            await this.update.click()
        }
    }

    get getEmail(){
        return (async()=>{
            return await this.gender
        })();
    }
}

export default Profile