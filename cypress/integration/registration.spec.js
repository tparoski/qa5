var helper = require ('../support/helper.js');
var registration = require ('../support/registration.js');
var faker = require('faker');
import {PASSWORD, UNICODE} from '../fixtures/constants'

describe('Register', function () {
    beforeEach(function(){
        cy.visit('/')
        registration.registerLink().click();
    });
  
   
    it('All empty fields', () => {
        registration.submitButton.click();
    });

    it('Spaces', () => {
        registration.register("  ", "   ", "   ", PASSWORD.VALID, PASSWORD.VALID);
    });

    it('Minimum characters', () => {
        registration.register(helper.getNCharactersLetters(1), helper.getNCharactersLetters(1), faker.internet.email(), PASSWORD.VALID, PASSWORD.VALID);
    });

    it('Maximum characters', () => {
        registration.register(helper.getNCharactersLetters(256), helper.getNCharactersLetters(256), faker.internet.email(), PASSWORD.VALID, PASSWORD.VALID);
    });

    it('Email format', () => {
        registration.register(faker.name.firstName(), faker.name.lastName(), helper.getNCharactersLetters(5), PASSWORD.VALID, PASSWORD.VALID);
    });

    it('Confirm password does not match', () => {
        registration.register(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), PASSWORD.VALID, "notValid");
    });

    it('Pass min characters', () => {
        registration.register(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), PASSWORD.SHORT, PASSWORD.SHORT);
    });

    it('Pass only letters', () => {
        registration.register(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), PASSWORD.LETTERS, PASSWORD.LETTERS);
    });

    it('Pass only numbers', () => {
        registration.register(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), PASSWORD.NUMBERS, PASSWORD.NUMBERS);
    });
    it('Pass with spaces', () => {
        registration.register(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), PASSWORD.SPACE, PASSWORD.SPACE);
    });

    it('Exsisting email', () => {
        var email = faker.internet.email();
        registration.register(faker.name.firstName(), faker.name.lastName(), email, PASSWORD.VALID, PASSWORD.VALID);
        registration.logOutButton.click();
        registration.registerLink().click();
        registration.register(faker.name.firstName(), faker.name.lastName(), email, PASSWORD.VALID, PASSWORD.VALID);
    });
   
    it('Success', () => {
       registration.register(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), PASSWORD.VALID, PASSWORD.VALID);
    });

    it('Unicode characters', () => {
       registration.register(UNICODE.NAME, UNICODE.SURNAME, faker.internet.email(), PASSWORD.VALID, PASSWORD.VALID);
    });
  
});
