# CTFLTEST-6 (Header)
Feature: Header
As a user, I want to be able to see the header information when I access the site. So that  I can check which site I am at.

Scenario: See Header information
    Given the user visits ISTQB CTFL homepage
    Then the text "ISTQB Online Exam" should be visible on header
    And the text "Developed with HTML5, CSS3 and Javascript" should be visible on header as subheader