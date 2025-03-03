# CTFLTEST-6 (Header)
# As a user,
# I want to be able to see the header information when I access the site.
# So that  I can check which site I am at.

# Acceptance Criteria 
# Header should have “ISTQB Online Exam“ as Title.
# Header should have “Developed with HTML5, CSS3 and Javascript“ as a subheading.

Feature: Header
As a user, I want to be able to see the header information when I access the site. So that  I can check which site I am at.

Scenario: See header information
    Given the user visits ISTQB CTFL homepage
    Then the text “ISTQB Online Exam“ should be visible.
    And the text “Developed with HTML5, CSS3 and Javascript“ should be visible.