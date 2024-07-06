Feature: Terms and conditions

  Scenario: User can view service terms
    Given I am logged in
    When I navigate to the service terms page
    Then I should see the service terms content
    