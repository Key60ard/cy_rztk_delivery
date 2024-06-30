Feature: Help and support

  Scenario: User can navigate to help section
    Given I am logged in
    When I click on the help link
    Then I should be on the help page

  Scenario: User can view FAQ section
    Given I am logged in
    When I navigate to the FAQ section
    Then I should see the FAQ content

  Scenario: User can contact support
    Given I am logged in
    When I navigate to the contact support page
    And I fill in the contact form
    And I submit the form
    Then I should see "Your message has been sent"