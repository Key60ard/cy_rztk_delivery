Feature: Branches management

  Scenario: User can view branches on map
    Given I am logged in
    When I navigate to the branches page
    Then I should see the branches on the map

  Scenario: User can filter branches by city
    Given I am logged in
    When I filter branches by "Odesa" city
    Then I should see only branches in "Odesa" city