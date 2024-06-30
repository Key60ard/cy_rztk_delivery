Feature: Navigation

  Scenario: User can navigate to the "Parcels" page
    Given I am logged in
    When I click on the "Parcels" link in the navigation menu
    Then I should be on the "Parcels" page
    