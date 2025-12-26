class Users{
    constructor(page, email){
        // this.edit = page.getByRole("link", {name: "View n Edit"})
        // this.delete = page.getByRole("button", {name: "Delete"})
        this.edit = page.locator("//td[.='"+`${email}`+"']/following-sibling::td/descendant::a[.='View n Edit']")
    }

    async viewEdit(){
        await this.edit.click()
    }

    async deleteUser(){
        await this.delete.click()
    }
}

export default Users
