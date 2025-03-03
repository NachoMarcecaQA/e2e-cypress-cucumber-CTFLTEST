import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  Then("the text {string} should be visible", (signup_title) => {
    cy.get('[data-testid="signup_title"]').should('have.text', signup_title);

  });

  Then("form must have {string} on first field", (signup_name) => {
    cy.get('[data-testid="signup_name"]').should('have.attr', 'placeholder', signup_name);
  });

  Then("form must have {string} on second field", (signup_surname) => {
    cy.get('[data-testid="signup_surname"]').should('have.attr', 'placeholder', signup_surname);
  });
  
  
