Feature: Login functionality

  Scenario: User can log in successfully
    Given I am on the login page
    When I enter "123456789" into the phone field
    And I enter "password123" into the password field
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: User cannot log in with incorrect credentials
    Given I am on the login page
    When I enter "1122334455" into the phone field
    And I enter "wrongpassword" into the password field
    And I click the login button
    Then I should see an error message
    