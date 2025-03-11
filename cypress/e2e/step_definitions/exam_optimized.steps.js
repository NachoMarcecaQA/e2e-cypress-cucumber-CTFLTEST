import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

//Selecting multiple answers
When("the user selects the following answers:", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    const questionId = `question-${parseInt(row.questionNumber)}-option-${row.answer}`;
    cy.get(`[data-testid="${questionId}"]`)
        .click();
  });
});


//Verifying the final score
Then("the final score should be {string}", (expectedScore) => {
  cy.get('[data-testid="final_score"]')
    .children()
    .should("have.text", expectedScore);
});