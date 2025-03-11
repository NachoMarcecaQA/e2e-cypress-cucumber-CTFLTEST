import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  // Pass the exam
  When("the user clicks on correct Q1 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q2 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q3 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q4 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q5 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q6 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q7 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q8 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q9 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on correct Q10 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on finish exam", () => {
    cy.get('[data-testid="finish_exam"]')
      .click();
  });

  Then("Passed final score should be {string}", (final_score) => {
    cy.get('[data-testid="final_score"]')
      .should('contain', final_score);
});

//Fail the exam
When("the user clicks on incorrect Q1 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q2 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q3 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q4 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q5 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q6 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q7 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q8 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q9 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  When("the user clicks on incorrect Q10 {string}", (question_id) => {
    cy.get(`[data-testid="${question_id}"]`)
      .click();
  });

  Then("Not passed final score should be {string}", (final_score) => {
    cy.get('[data-testid="final_score"]')
      .should('contain', final_score);
});