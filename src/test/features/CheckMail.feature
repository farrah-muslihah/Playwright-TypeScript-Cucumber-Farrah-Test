Feature: Check Mail tests

Background:
    Given User navigates to the application

Scenario: Mail should be successfully created
    And User enter the mail as "test_20240520_123456"
    When User click on check the mail button
    Then mail should be created
    