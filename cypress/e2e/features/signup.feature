#CTFLTEST-1 (Sign up)
# Form must be hidden after signup is complete.
# ISTQB Tests must be shown after signup is complete.

Feature: Signup new user
As a student, I want to signup in the ISTQB CTFL site with my name and surname, so that  I can access the test.

Background:
     Given the user visits ISTQB CTFL homepage

Scenario: See sign up information
    Then the text "Sign up" should be visible
    And form must have "Name" as title in name form field
    And form must have "Surname" as title on surname form field
    And exam should not be visible

Scenario: Fill sign up form with mandatory fields happy path
    When the user fill name with "Ben"
    And the user fill surname with "Cox" 
    And the user clicks on signup submit
    Then the user should see welcome message "Welcome"
    And sign up form should not be visible

Scenario Outline: Fill sign up form with invalid data
    When the user fill names with <name>
    And the user fill surnames with <surname> 
    And the user clicks on signup submit_
    Then the user should see error message "Name and Surname must be between 3 and 30 characters long"

Examples:
    | name      | surname       | 
    | "Ed"      | "Richards"    |
    | "Michael" | "Li"          |
    | "Al"      | "Wu"          |
    |    " "    | "Richards"    |
    | "Michael" |        " "    |
    | "Sriwattanapongseboripattarakamphuatsigiannopoulos" | "Richards"   |
    | "Michael" | "Wolfeschlegelsteinhausenbergerdorffsigiannopoulos"    |