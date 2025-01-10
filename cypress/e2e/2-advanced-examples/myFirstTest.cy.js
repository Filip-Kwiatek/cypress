// Code suggestions
/// <reference types="cypress" />

// Assigning a variable
const navbarText = Cypress.env("navbarText");

// Create variable
const token = "abcd123";

// Main name of the test schedule
context("My first test", () => {
  // load the data from the file (example), then prepare data
  beforeEach(() => {
    cy.visit("/commands/actions");
    // // cy.fixture("example").then(function (data) {
    // //   this.data = data;
    // //   cy.log("THIS: ", this.data);
    // });
  });

  // Get the given element (by class) and click on it
  // Find by text given string and check that is visible
  // it("triggers a popover on click", () => {
  //   cy.get(".action-btn").click();
  //   cy.findByText("This popover shows up on click").should("be.visible");
  // });

  // Get given element (by id) and click on 3 different places on canva
  // it("can click on diffrent sections of a canvas", () => {
  //   cy.get("#action-canvas").click("top");
  //   cy.get("#action-canvas").click("bottomRight");
  //   cy.get("#action-canvas").click(80, 100);
  // });

  // Double click on the given element (by class) and check it is not visible
  // After that check for the visibile of different class (that appered after clicked)
  // it("can double click to edit", () => {
  //   cy.get(".action-div").dblclick().should("not.be.visible");
  //   cy.get(".action-input-hidden").should("be.visible");
  // });

  // Get element (by class) and right click on it, check it is not visible
  // After that check for the visibility of different class (that appered after clicked)
  // it("can right click on edit", () => {
  //   cy.get(".rightclick-action-div").rightclick().should("not.be.visible");
  //   cy.get(".rightclick-action-input-hidden").should("be.visible");
  // });

  // Catch by jQuery given element (by class) and hover on it
  // After that catch list with class active and add there class open
  // It works like this due to Cypress lack of hover command and you need to use workarounds
  it("shows the nav link on hover", () => {
    cy.$$(".dropdown-toggle").hover(() => {
      cy.$$("li.active").addClass("open");
    });
  // Get element (by class) and trigger it using (mouseover)
  // After that check for the visibility of diffrent class (after hover)
    cy.get(".dropdown-toggle").trigger("mouseover");
    cy.get(".dropdown-menu").should("be.visible");
  });

  // it("sets and gets a token from local storage", () => {
  //   // setLocalStorage key and name
  //   cy.setLocalStorage("token", token);
  //   // getLocalStorage token key and check that its equal to the given string
  //   cy.getLocalStorage("token").should("eq", token);
  // });

  // it("overwrites the type command by using sensitive characters", () => {
  //   // visit other part of the web
  //   cy.visit("/commands/actions");
  //   // findByPlaceholderText (Email) and type there given string
  //   cy.findByPlaceholderText("Email").type("test@email.com");
  //   // findByPlaceholderText (Email) and type there given string but with sensitive parameter set to true
  //   cy.findByPlaceholderText("Email").type("test@email.com", {
  //     sensitive: true });
  // });

  // visit the other part of the web, there stub network request (GET) comments, keep response in (this.data)
  // change intercept name to 'getComment'
  // click on the network button
  // wait for the response and then give results in cy.log
  // if the response contains (body) you will recieve just a body, if not you will get a whole object (example)
  // it("uses fixture data in a newtwork request", function () {
  //   cy.visit("/commands/network-requests");
  //   cy.intercept("GET", "**/comments/*", this.data).as("getComment");
  //   cy.get(".network-btn").click();
  //   cy.wait("@getComment").then((res) => {
  //     cy.log("Response: ", res);
  //   });
  // });

  // // pulls data from a fixture (example)
  // it("pulls data from a fixture", () => {
  //   cy.fixture("example").then((data) => {
  //     cy.log("DATA: ", data);
  //   });
  // });

  // // updates fixture data (example) inline
  // it("updates fixture data inline", () => {
  //   cy.fixture("example").then((data) => {
  //     data.email = "updated@mail.com";
  //     cy.log("UPDATED: ", data);
  //   });
  // });
  // Execute before every each of the test case
  // beforeEach(() => {
  // Visit this site (setted in config)
  //   cy.visit("/");
  // });
  // Before any test, execute this test
  // before(() => {
  //   // Send request for the api and check its body that its has given length
  //   cy.request("https://api.spacexdata.com/v3/missions")
  //     .its("body")
  //     .should("have.length", 10);
  // });
  // // Before every test execute this test
  // beforeEach(() => {
  //   cy.visit("/");
  // });
  // // After every test execute this test
  // afterEach(() => {
  //   cy.log("after each hook is here");
  // });
  // // After all the tests execute this test
  // after(() => {
  //   cy.log("the final after hook runs once");
  // });

  // it("has an h1 on the page", () => {
  //   //Catch h1 which should "exist"
  //   cy.get("h1").should("exist");
  // });
  // it("renders the correct h1 text", () => {
  //   //Catch h1 which should have string/value "Kitchen Sink"
  //   cy.get("h1").should("contain.text", "Kitchen Sink");
  // });
  // it("renders a paragraph under the h1", () => {
  // Catch second element with class "container", find there paragraph which should exist
  //   cy.get(".container").eq(1).find("p").should("exist");
  // });

  // it("renders a section with the correct elements", () => {
  // Find third element with class "container" and within it get h4 which should exist and also paragraph which should exist
  //   cy.get(".container")
  //     .eq(2)
  //     .within(() => {
  //       cy.get("h4").should("exist");
  //       cy.get("p").should("exist");
  //     });
  // });
  // it("correctly renders the cypress website link", () => {
  // Using "testing-library/cypress/add-commands" and catching by text with given string which should exists
  //   cy.findByText(navbarText).should("exist");
  // });
  // Visit other part of the web and find by placeholder named Email and type there value
  // Wait 2 seconds and them fetch api from given web and pull the data and change file format to json and then console log the data
  // it("types in an email field", () => {
  //   cy.visit("/commands/actions");
  //   cy.findByPlaceholderText("Email").type("test@email.com");
  //   cy.wait(2000).then(() => {
  //     fetch("https://api.spacexdata.com/v3/missions")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   });
  // });
  // it("shows an active class for the current page", () => {
  //   // Visit other part of the web and catch the given class, find there third li which should have a class "active"
  //   cy.visit("/commands/actions");
  //   cy.get(".dropdown-menu").find("li").eq(2).should("have.class", "active");
  // });
  // it("should not have an active class on inactive pages", () => {
  //   // Visit other part of the web and catch the given class, find there first li which should not have an class "active"
  //   // After find anchor tag which should have attribute "href" and value "/commands/querying"
  //   cy.visit("/commands/actions");
  //   cy.get(".dropdown-menu")
  //     .find("li")
  //     .first()
  //     .should("not.have.class", "active")
  //     .find("a")
  //     .should("have.attr", "href", "/commands/querying");
  // });
  // it("links to the actions page correctly", () => {
  //  Find text "Actions" click on the first element with that string
  // Check that Url indluce given string
  //   cy.visit("/");
  //   cy.findAllByText("Actions").first().click({ force: true });
  //   cy.url().should("include", "/commands/actions");
  // });
  // it("lets you type in the input field", () => {
  // Find by placeholder text given string and type there string, which should have given value
  //   cy.visit("/commands/actions");
  //   cy.findByPlaceholderText("Email").type("Test").should("have.value", "Test");
  // });
  // it("lets you to clear an input field", () => {
  // Find by label text given name and type there. Next check for the given value, then clear label value and check again value of the label
  //   cy.visit("/commands/actions");
  //   cy.findByLabelText("Describe:")
  //     .type("Test description")
  //     .should("have.value", "Test description")
  //     .clear()
  //     .should("have.value", "");
  // });
  // it("lets you check a checkbox", () => {
  // Get the class with checkboxes and search for second element within it, then check it and check that is checked
  //   cy.visit("/commands/actions");
  //   cy.get('.action-checkboxes [type="checkbox"]')
  //     .eq(1)
  //     .check({ force: true })
  //     .should("be.checked");
  // });
});
