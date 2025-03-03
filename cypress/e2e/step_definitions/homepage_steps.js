import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("the user visits ISTQB CTFL homepage", () => {
    cy.visit("/");
  });

 