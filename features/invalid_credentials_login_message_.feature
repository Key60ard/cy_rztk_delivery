Feature: invalid_credentials_login_message_

  Scenario: User cannot log in with incorrect credentials
    Given I visit login page
    When I enter "1122334455" into the phone field
    And I enter "wrongpassword" into the password field
    And I click the login button
    Then I should see an error message