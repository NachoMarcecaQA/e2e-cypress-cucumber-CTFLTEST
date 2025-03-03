import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  Then("the text “ISTQB Online Exam“ should be visible.", () => {
    cy.get('[data-testid="header_name"]').should('have.text', "ISTQB Online Exam");
  });

  Then("the text “Developed with HTML5, CSS3 and Javascript“ should be visible.", () => {
    cy.get('[data-testid="subheader_name"]').should('contain', "HTML5, CSS3 and Javascript");
  });
 