#CTFLTEST-3 (Exam)

Feature: Exam
As a student, I want to answer 10 questions from the ISTQB exam, so that I can receive my grade for all the questions simultaneously.

Background: The user visits site and successfully registers
    Given the user visits ISTQB CTFL homepage
    And the user fill name with "Ben"
    And the user fill surname with "Cox" 
    And the user clicks on signup submit

Scenario Outline: Pass the exam
    When the user clicks on correct Q1 "question-0-option-3"
    And the user clicks on correct Q3 "question-1-option-1" 
    And the user clicks on correct Q2 "question-2-option-1"
    And the user clicks on correct Q4 "question-3-option-2" 
    And the user clicks on correct Q5 "question-4-option-2"
    And the user clicks on correct Q6 "question-5-option-2"
    And the user clicks on correct Q7 "question-6-option-4" 
    And the user clicks on correct Q8 "question-7-option-4"
    And the user clicks on correct Q9 "question-8-option-4"
    And the user clicks on correct Q10 "question-9-option-4" 
    And the user clicks on finish exam
    Then Passed final score should be "20/20"

Scenario Outline: Fail the exam
    When the user clicks on incorrect Q1 "question-0-option-2"
    And the user clicks on incorrect Q3 "question-1-option-3" 
    And the user clicks on incorrect Q2 "question-2-option-2"
    And the user clicks on incorrect Q4 "question-3-option-4" 
    And the user clicks on incorrect Q5 "question-4-option-1"
    And the user clicks on incorrect Q6 "question-5-option-3"
    And the user clicks on incorrect Q7 "question-6-option-2" 
    And the user clicks on incorrect Q8 "question-7-option-3"
    And the user clicks on incorrect Q9 "question-8-option-2"
    And the user clicks on incorrect Q10 "question-9-option-1" 
    And the user clicks on finish exam
    Then Not passed final score should be "0/20"