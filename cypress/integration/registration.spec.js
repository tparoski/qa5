var helper = require ('../support/helper.js');

describe('Register', function () {
    it('Visit registration page', () => {
        cy.visit('/')
    })
    it('Click regoister', () => {
        cy.get("a[href='/register']").click();

    })
    it('Negative register', () => {

        cy.get('button').click()
    })

    it('Fillout register', () => {
        cy.reload()
        cy.get("#first-name").clear().type("Test");
        cy.get("#last-name").clear().type("Testeric");
        cy.get("#email").clear().type(helper.getNCharactersLetters(5));
        cy.get("#password").clear().type("test1234");
        cy.get("#password-confirmation").clear().type("test1234");
        cy.get('[type="checkbox"]').check()
        cy.get('button').click()

    })
})