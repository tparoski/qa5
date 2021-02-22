var helper = require ('../support/helper.js');

describe('Register', function () {
    it('Visit gallery page', () => {
        cy.visit('/')
    })

    it('Click login', () => {
        cy.get("a[href='/login']").click();

    })
    it('Click login', () => {
        cy.get("input[type='email']").type("helper.getNCharactersLetters(5)");
        cy.get("input[type='password']").type("test1234");
        cy.get('button').click();

    })
    it('Click logout', () => {
        cy.get(".ml-auto > :nth-child(3) > .nav-link").click();
    })
})