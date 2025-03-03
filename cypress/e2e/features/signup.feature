#CTFLTEST-1 (Sign up)
# As a student, I want to signup in the ISTQB CTFL site with my name and surname, So that  I can access the test.

# Acceptance Criteria 
# Form should have “Signup“ as Title.
# Form must validate  both mandatory fields “Name” and “Surname” having:
# Between 3 and 30 characters.
# Can not be empty.
# On send, the form must show a welcome message including the user’s name “Welcome [NAME] [SURNAME] !”.
# Form must be hidden after signup is complete.
# ISTQB Tests must be shown after signup is complete.

Feature: Signup new user
As a student, I want to signup in the ISTQB CTFL site with my name and surname, so that  I can access the test.

Scenario: See Sign up information
    Given the user visits ISTQB CTFL homepage
    Then the text "Sign up" should be visible
    And form must have "Name" on first field
    And form must have "Surname" on second field

