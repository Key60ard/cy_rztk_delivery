Feature: Error handling

  Scenario: User receives error for required fields
    Given I am on a form page
    When I submit the form without filling required fields
    Then I should see error messages for the required fields

  Scenario: User receives error for invalid phone format
    Given I am on a form page
    When I enter an invalid phone format
    And I submit the form
    Then I should see an error message for invalid phone format

  Scenario: User receives error for password mismatch
    Given I am on the change password page
    When I enter a new password
    And I enter a different confirmation password
    And I submit the form
    Then I should see an error message for password mismatch

  Scenario: User receives error for exceeding login attempts
    Given I am on the login page
    When I enter incorrect credentials multiple times
    Then I should see an error message for exceeding login attempts