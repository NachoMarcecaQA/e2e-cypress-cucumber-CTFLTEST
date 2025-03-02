# Acceptance Criteria for CTFLTEST-1

# - Form should have “Signup“ as Title.
# - Form must validate  both mandatory fields “Name” and “Surname” having:
# - Between 3 and 30 characters.
# - Can not be empty.
# - On send, the form must show a welcome message including the user’s name “Welcome [NAME] [SURNAME] !”.
# - Form must be hidden after signup is complete.
# - ISTQB Tests must be shown after signup is complete.


Feature: Signup new user

As a student, I want to signup in the ISTQB CTFL site with my name and surname, so that  I can access the test.

Scenario: Form should have “Sign up“ as Title.
    Given the user visits ISTQB CTFL homepage
    When 
    Then 

