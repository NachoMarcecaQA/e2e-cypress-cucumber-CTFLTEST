import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  // See sign up information
  Then("the text {string} should be visible", (signup_title) => {
    cy.get('[data-testid="signup_title"]')
      .should('have.text', signup_title);
  });

  Then("form must have {string} as title in name form field", (signup_placeholder_name) => {
    cy.get('[data-testid="signup_name"]')
      .should('have.attr', 'placeholder', signup_placeholder_name);
  });

  Then("form must have {string} as title on surname form field", (signup_placeholder_surname) => {
    cy.get('[data-testid="signup_surname"]')
      .should('have.attr', 'placeholder', signup_placeholder_surname);
  });
  
  Then("exam should not be visible", () => {
    cy.get('[data-testid="exam"]')
      .should('not.be.visible');;
  });

  //Fill sign up form with mandatory fields happy path
  When("the user fill name with {string}", (name) => {
    cy.get('[data-testid="signup_name"]')
      .clear();
    cy.get('[data-testid="signup_name"]')
      .type(name);
  });
  
  When("the user fill surname with {string}", (surname) => {
    cy.get('[data-testid="signup_surname"]')
      .clear();
    cy.get('[data-testid="signup_surname"]')
      .type(surname);
  });

  When("the user clicks on signup submit", () => {
    cy.get('[data-testid="signup_submit"]')
      .click();
  });

  Then("the user should see welcome message {string}", (welcome_message) => {
    cy.get('[data-testid="welcome_message"]').children()
      .should('contain', welcome_message);
  });

  Then("sign up form should not be visible", () => {
    cy.get('[data-testid="signup"]')
      .should('not.be.visible');;
  });

  //Fill sign up form with invalid data
  When("the user fill names with {string}", (name) => {
    cy.get('[data-testid="signup_name"]')
      .clear();
    cy.get('[data-testid="signup_name"]')
      .type(name);
  });
  
  When("the user fill surnames with {string}", (surname) => {
    cy.get('[data-testid="signup_surname"]')
      .clear();
    cy.get('[data-testid="signup_surname"]')
      .type(surname);
  });

  When("the user clicks on signup submit_", () => {
    cy.get('[data-testid="signup_submit"]')
      .click();
  });

    Then("the user should see error message {string}", (error_message) => {
    cy.get('[data-testid="signup_error_message"]')
      .should('contain', error_message);
  });