Feature: User account management

  Scenario: User can change password
    Given I am logged in
    When I navigate to the change password page
    And I enter my current password
    And I enter a new password
    And I confirm the new password
    And I click the save button
    Then I should see "Password changed successfully"

  Scenario: User can log out successfully
    Given I am logged in
    When I click the logout button
    Then I should be redirected to the login page

  Scenario: User can view transaction history
    Given I am logged in
    When I navigate to the transaction history page
    Then I should see my transaction history

  Scenario: User can replenish balance
    Given I am logged in
    When I navigate to the replenish balance page
    And I enter an amount
    And I click the replenish button
    Then I should see "Balance replenished successfully"

  Scenario: User can view account settings
    Given I am logged in
    When I navigate to the account settings page
    Then I should see my account settings

  Scenario: User can update profile information
    Given I am logged in
    When I navigate to the profile information page
    And I update my profile information
    And I click the save button
    Then I should see "Profile updated successfully"

  Scenario: User can delete account
    Given I am logged in
    When I navigate to the delete account page
    And I confirm the account deletion
    Then I should see "Account deleted successfully"