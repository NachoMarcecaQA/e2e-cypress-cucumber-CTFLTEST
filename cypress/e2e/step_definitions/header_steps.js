import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  Then("the text {string} should be visible on header", (header_name) => {
    cy.get('[data-testid="header_name"]').should('have.text', header_name);
  });

  Then("the text {string} should be visible on header as subheader", (subheader_name) => {
    cy.get('[data-testid="subheader_name"]').should('contain', subheader_name);
  });
 

