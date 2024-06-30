Feature: Additional features

  Scenario: User can download app
    Given I am logged in
    When I navigate to the download app page
    Then I should see the download links for the app

  Scenario: User can change interface language
    Given I am logged in
    When I navigate to the language settings page
    And I change the interface language to "UA"
    Then I should see the interface in "UA"

  Scenario: User can view commission details
    Given I am logged in
    When I navigate to the commission details page
    Then I should see the commission details

  Scenario: User can share parcel information
    Given I am logged in
    And I have a parcel with number "12345"
    When I click the share button
    Then I should see sharing options for the parcel

  Scenario: User can download invoice
    Given I am logged in
    And I have a parcel with number "12345"
    When I click the download invoice button
    Then I should download the invoice for the parcel

  Scenario: User can view archived parcels
    Given I am logged in
    When I navigate to the archived parcels page
    Then I should see the archived parcels

  Scenario: User can view active parcels
    Given I am logged in
    When I navigate to the active parcels page
    Then I should see the active parcels

  Scenario: User can duplicate a parcel
    Given I am logged in
    And I have a parcel with number "12345"
    When I click the duplicate button
    Then I should see a new parcel created with the same details

  Scenario: User can view delivery cost
    Given I am logged in
    And I have a parcel with number "12345"
    When I view the parcel details
    Then I should see the delivery cost

  Scenario: User can view recipient details
    Given I am logged in
    And I have a parcel with number "12345"
    When I view the parcel details
    Then I should see the recipient details

  Scenario: User can view sender details
    Given I am logged in
    And I have a parcel with number "12345"
    When I view the parcel details
    Then I should see the sender details

  Scenario: User can view work schedule
    Given I am logged in
    When I navigate to the work schedule page
    Then I should see the work schedule

  Scenario: User can apply for connection
    Given I am logged in
    When I navigate to the connection application page
    And I fill in the application form
    And I submit the form
    Then I should see "Application submitted successfully"

  Scenario: User can submit connection form
    Given I am on the connection form page
    When I fill in the form
    And I submit the form
    Then I should see "Form submitted successfully"

  Scenario: User can view public offers
    Given I am logged in
    When I navigate to the public offers page
    Then I should see the public offers content
    