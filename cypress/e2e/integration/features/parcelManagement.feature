Feature: Parcel management

  Scenario: User can create a new parcel
    Given I am logged in
    When I navigate to the create parcel page
    And I enter "John Doe" into the recipient name field
    And I enter "123456789" into the recipient phone field
    And I enter "123 Main St" into the recipient address field
    And I click the create button
    Then I should see "Parcel created successfully"

  Scenario: User can delete a parcel
    Given I am logged in
    And I have a parcel with number "12345"
    When I delete the parcel with number "12345"
    Then I should see "Parcel deleted successfully"

  Scenario: User can search for a parcel
    Given I am logged in
    When I search for parcel with number "12345"
    Then I should see the parcel details

  Scenario: User can archive a parcel
    Given I am logged in
    And I have a parcel with number "12345"
    When I archive the parcel with number "12345"
    Then I should see "Parcel archived successfully"

  Scenario: User can unarchive a parcel
    Given I am logged in
    And I have an archived parcel with number "12345"
    When I unarchive the parcel with number "12345"
    Then I should see "Parcel unarchived successfully"

  Scenario: User can edit a parcel
    Given I am logged in
    And I have a parcel with number "12345"
    When I edit the parcel details
    And I click the save button
    Then I should see "Parcel updated successfully"

  Scenario: User can filter parcels by status
    Given I am logged in
    When I filter parcels by "Delivered" status
    Then I should see only parcels with "Delivered" status

  Scenario: User can sort parcels by date
    Given I am logged in
    When I sort parcels by date
    Then the parcels should be sorted by date

  Scenario: User can view parcel details
    Given I am logged in
    And I have a parcel with number "12345"
    When I view the parcel details
    Then I should see the details of the parcel

  Scenario: User can export parcel data
    Given I am logged in
    When I click on the export button
    Then I should download the parcel data file

  Scenario: User can print parcel details
    Given I am logged in
    And I have a parcel with number "12345"
    When I click on the print button
    Then I should see the print preview of the parcel details

  Scenario: User can copy parcel number to clipboard
    Given I am logged in
    And I have a parcel with number "12345"
    When I click the copy parcel number button
    Then the parcel number should be copied to the clipboard

  Scenario: User can view parcel history
    Given I am logged in
    And I have a parcel with number "12345"
    When I view the parcel history
    Then I should see the history of the parcel

  Scenario: User can track a parcel
    Given I am logged in
    And I have a parcel with number "12345"
    When I track the parcel
    Then I should see the tracking details of the parcel

  Scenario: User can cancel a parcel
    Given I am logged in
    And I have a parcel with number "12345"
    When I cancel the parcel
    Then I should see "Parcel canceled successfully"