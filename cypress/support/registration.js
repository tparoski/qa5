module.exports = {

    registerLink: function() {
        return cy.get("a[href='/register']");
    },
   
    firstName: function() {
        return cy.get("#first-name");
    },
    lastName: function() {
        return cy.get("#last-name");
    },

    email: function() {
        return cy.get("#email");
    },
    password: function() {
        return cy.get("#password");
    },
    confirmPass: function() {
        return cy.get("#password-confirmation");
    },

    get terms() {
        return cy.get('[type="checkbox"]');
    },

    get submitButton() {
        return cy.get('button');
    },
    get logOutButton() {
        return cy.get('.ml-auto > :nth-child(3) > .nav-link')
    },
    register(firstName, lastName, email, password, confirmPass){
        firstName && this.firstName().clear().type(firstName)
        lastName && this.lastName().clear().type(lastName)
        email && this.email().clear().type(email)
        password && this.password().clear().type(password)
        confirmPass && this.confirmPass().clear().type(confirmPass)
        this.terms.check()
        this.submitButton.click()
       
    }
 
}