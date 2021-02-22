var signInPage = require('../support/signInPage.js');
var helper = require ('../support/helper.js');

describe('Sign in page', function () {

context('Visibility', function () {
    before(function () {       
      cy.visit('https://app.vivifyscrum.com/login')
    });

    it('should have all links to new tabs', function () {
    signInPage.homeButton().should('be.visible')
    .and('have.attr', 'href')
    .and('include', 'https://www.vivifyscrum.com');
    signInPage.closeButton().should('be.visible')
    .and('have.attr', 'href')
    .and('include', 'https://www.vivifyscrum.com');
});

it('should take you to forgot password page', function () {
    signInPage.signUp().should('be.visible')
    .and('have.attr', 'href');
    signInPage.signUp().click();
    cy.url().should('eq', 'https://app.vivifyscrum.com/sign-up');
    cy.go('back');
});

it('should take you to sign in page', function () {
    signInPage.forgotPassword().should('be.visible')
    .and('have.attr', 'href');
    signInPage.forgotPassword().click();
    cy.url().should('include', 'https://app.vivifyscrum.com/forgot-password');
    cy.go('back');
});  

it('should have all buttons', function () {
    signInPage.logIn().should('be.visible');
    signInPage.google().should('be.visible');
    signInPage.facebook().should('be.visible');
    signInPage.twitter().should('be.visible');
});

it('should have all titles and labels', function () {
    signInPage.title().contains('Log in with your existing account');
    signInPage.labelEmail().contains('Email');
    signInPage.labelPassword().contains('Password');
    signInPage.orLogin().contains('Or login with...');
    signInPage.noAccount().should('be.visible');
}); 

it('should have all input elements', function () {    
    signInPage.inputEmail().should('have.attr', 'placeholder', 'Enter Email Address');
    signInPage.inputPassword().should('have.attr', 'placeholder', 'Enter Password'); 
});    

});

context('With refresh page', function () {
    beforeEach(function () {       
        cy.reload();
      });

//refresh from here
it('should say email and password are required', function () {
 signInPage.logIn().click();

 signInPage.emailRequired().should('be.visible');
 signInPage.passwordRequired().should('be.visible');
 signInPage.logIn().should('have.class', 'is-disabled');
});

it('should say email and password are required 2', function () {
    signInPage.setEmail("email@example.com");
    signInPage.clearEmail();
    signInPage.setPass("password");
    signInPage.clearPass();
    signInPage.logIn().click();

    signInPage.emailRequired().should('be.visible');
    signInPage.passwordRequired().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');
});

it('should say email and password are required with spaces', function () {
    signInPage.setEmail("   ");
    signInPage.setPass("   ");
    signInPage.logIn().click();

    signInPage.emailRequired().should('be.visible');
    signInPage.passwordRequired().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');
});

it('should say email is required', function () {
    signInPage.setPass("password");
    signInPage.logIn().click();

    signInPage.emailRequired().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');
});

it('should say password is required', function () {
    signInPage.setEmail("email@example.com");
    signInPage.logIn().click();

    signInPage.passwordRequired().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');
});

it('should say wrong email format 1', function () {
    signInPage.setEmail("emailexample.com");
    signInPage.setPass("password");
    signInPage.logIn().click();

    signInPage.emailFormat().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');

});

it('should say wrong email format 2', function () {
    signInPage.setEmail("email@example");
    signInPage.setPass("password");
    signInPage.logIn().click();

    signInPage.emailFormat().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');

});

it('should say wrong email format 3', function () {
    signInPage.setEmail("@example.com");
    signInPage.setPass("password");
    signInPage.logIn().click();

    signInPage.emailFormat().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');

});

it('should say wrong email format 4', function () {
    signInPage.setEmail("email@example@examle.com");
    signInPage.setPass("password");
    signInPage.logIn().click();

    signInPage.emailFormat().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');

});

it('should say wrong password format', function () {
    signInPage.setEmail("email@example.com");
    signInPage.setPass("pass");
    signInPage.logIn().click();

    signInPage.passFormat().should('be.visible');
    signInPage.logIn().should('have.class', 'is-disabled');

});
it('wrong credentials', function () {
    signInPage.setEmail("email@example.com");
    signInPage.setPass("password");
    signInPage.logIn().click();

    signInPage.wrongCredentials().should('be.visible');
    cy.hash().should('be.empty')
});
it('wrong email', function () {
    signInPage.setEmail("email@example.com");
    signInPage.setPass("majakowski0506");
    signInPage.logIn().click();

    signInPage.wrongCredentials().should('be.visible')
    cy.hash().should('be.empty')
});

it('wrong password', function () {
    signInPage.setEmail("tparoski@gmail.com");
    signInPage.setPass("password");
    signInPage.logIn().click();

    signInPage.wrongCredentials().should('be.visible');
    cy.hash().should('be.empty')
});

it('correct credentials', function () {
    signInPage.setEmail("tparoski@gmail.com");
    signInPage.setPass("majakowski0506");
    signInPage.logIn().click();

    cy.url().should('eq', 'https://app.vivifyscrum.com/my-boards')
});
});

context('Sign up', function () {
    before(function () {       
      cy.visit('https://app.vivifyscrum.com/sign-up')
    });

    it('should use healper', function () {
        signInPage.setEmail(helper.getNCharactersLetters(5));
});
});
});
