# CTFLTEST-3 (Exam)

Feature: Exam optimized
  As a student, I want to answer 10 questions from the ISTQB exam,
  so that I can receive my grade for all the questions simultaneously.

Background: The user visits site and successfully registers
    Given the user visits ISTQB CTFL homepage
    And the user fill name with "Ben"
    And the user fill surname with "Cox" 
    And the user clicks on signup submit

Scenario Outline: Answer the exam and get the final score
  When the user selects the following answers:
    | questionNumber | answer |
    | <q1>           | <a1>   |
    | <q2>           | <a2>   |
    | <q3>           | <a3>   |
    | <q4>           | <a4>   |
    | <q5>           | <a5>   |
    | <q6>           | <a6>   |
    | <q7>           | <a7>   |
    | <q8>           | <a8>   |
    | <q9>           | <a9>   |
    | <q10>          | <a10>  |
    And the user clicks on finish exam
    Then the final score should be "<finalScore>"

Examples: Pass the exam
    | q1 | a1| q2| a2 | q3| a3 | q4| a4 | q5| a5 | q6| a6 | q7| a7 | q8| a8 | q9| a9 | q10| a10| finalScore         |
    | 0  | 3 | 1 | 1  | 2 | 1  | 3 | 2  | 4 | 2  | 5 | 2  | 6 | 4  | 7 | 4  | 8 | 4  | 9  | 4  | Final Score: 20/20 |
    | 0  | 3 | 1 | 1  | 2 | 2  | 3 | 2  | 4 | 2  | 5 | 2  | 6 | 3  | 7 | 4  | 8 | 4  | 9  | 4  | Final Score: 14/20 |

Examples: Fail the exam
    | q1 | a1| q2| a2 | q3| a3 | q4| a4 | q5| a5 | q6| a6 | q7| a7 | q8| a8 | q9| a9 | q10| a10| finalScore         |
    | 0  | 2 | 1 | 3  | 2 | 4  | 3 | 3  | 4 | 3  | 5 | 4  | 6 | 2  | 7 | 3  | 8 | 2  | 9  | 1  | Final Score: 0/20  |
    | 0  | 3 | 1 | 1  | 2 | 1  | 3 | 0  | 4 | 0  | 5 | 0  | 6 | 0  | 7 | 0  | 8 | 0  | 9  | 0  | Final Score: 6/20  |