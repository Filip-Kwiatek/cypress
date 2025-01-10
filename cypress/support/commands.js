// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";
// Create a new command with name (setLocalStorage) with key and value
Cypress.Commands.add("setLocalStorage", (key, value) => {
  // Get a widnow and then set localStorage key and value
  cy.window().then((window) => {
    window.localStorage.setItem(key, value);
  });
});
// Create a new command with name (setLocalStorage) with key
Cypress.Commands.add("getLocalStorage", (key) => {
  // Get a window and then return the key of the localStorage
  cy.window().then((window) => {
    return window.localStorage.getItem(key);
  });
});

// Overwrite the command (type) with given parameters
Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  // if options and option with "sensitive" property is true
  if (options && options.sensitive) {
    // return empty log
    options.log = false;
    // return log with highlighted element, overwritten name and message, whose letters will transform to the * (depending on the text length)
    Cypress.log({
      $el: element,  
      name: "type",
      message: "*".repeat(text.length),
    });
    // return function with given parameters
    return originalFn(element, text, options);
  }
});
