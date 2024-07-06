Feature: Login to App

  Scenario: User can log in successfully
    Given I visit login page
    When I enter "123456789" into the phone field
    And I enter "password123" into the password field
    And I click the login button
    Then I should be redirected to the dashboard
  