module.exports = {

    get logInLink() {
        return cy.get("a[href='/login']");
    },
    get email() {
        return cy.get("input[type='email']");
    },

    get password(){
        return cy.get("input[type='password']");
    },

    get logInButton() {
        return cy.get('button');
    },

    login(email, password){
        email && this.email.clear().type(email)
        password && this.password.clear().type(password)
        this.logInButton.click()
        
    }
}