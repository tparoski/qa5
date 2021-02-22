
module.exports = {
   
    //links
    homeButton: function() {
        return cy.get("a:first");
    },

    closeButton: function() {
        return cy.get("a:eq(1)");
    },

    signUp: function() {
        return cy.get("a:last");
    },
   
    forgotPassword: function () {
        return cy.get("a:eq(2)");
    },

    //buttons

    logIn: function () {
        return cy.get("button:first");
    },
    google: function () {
        return cy.get("button:eq(1)");
    },
    facebook: function () {
        return cy.get("button:eq(2)");
    },
    twitter: function () {
        return cy.get("button:last");
    },

    //titles and labels
    title: function() {
        return cy.get("h1");
    },
    labelEmail: function () {
        return cy.get("label:first");
    },
    labelPassword: function () {
        return cy.get("label:last");
    }, 
    orLogin: function() {
        return cy.get("p:last");
    },
    noAccount: function() {
        return cy.get("div:contains('Don`t have an account?')");
    },

    //input
    inputEmail: function () {
        return cy.get("input:first");
    },
    inputPassword: function () {
        return cy.get("input:last");
    },
    setEmail: function(email) {
        return cy.get("input[name='email']").type(email);
    },
    setPass: function(password) {
        return cy.get("input[type='password']").type(password);
    },

    clearEmail: function(){
        return cy.get("input[name='email']").clear();
    },

    clearPass: function(){
        return cy.get("input[type='password']").clear();
    },

    //errors
    emailRequired: function() {
        return cy.get("span:contains('The email field is required.')");
    },
    passwordRequired: function() {
        return cy.get("span:contains('The password field is required.')");
    },
    emailFormat: function() {
        return cy.get("span:contains('The email field must be a valid email.')");
    },
    passFormat: function() {
        return cy.get("span:contains('The password field must be at least 5 characters.')");
    },
    wrongCredentials: function() {
        return cy.get("span:contains('Oops! Your email/password combination is incorrect')");
    }
     
  }
