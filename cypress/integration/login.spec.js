var logIn = require ('../support/login.js');
var faker = require('faker');
import {LOGIN} from '../fixtures/constants';

describe('Register', function () {
    beforeEach(function(){
        cy.visit('/')
        logIn.logInLink.click();
    });

    it('Empty', () => {
        logIn.logInButton.click();
    });

    it('Wrong email', () => {
        logIn.login(faker.internet.email(), LOGIN.PASSWORD);
    });
    
    it('Wrong password', () => {
        logIn.login(LOGIN.EMAIL, faker.internet.password());
    });

    it('Success', () => {
        logIn.login(LOGIN.EMAIL,LOGIN.PASSWORD);
    });
})