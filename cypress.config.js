const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Command that let's you visit given web
    baseUrl: "https://example.cypress.io",
    // Creating enviroment variable
    // You can put any property here and then call it anywhere in your code
    env: {
      // Key (property) with value
      navbarText: "cypress.io",
    },
  },
});
