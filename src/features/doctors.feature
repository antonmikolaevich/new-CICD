@doctors
Feature: Doctors

@2
Scenario: It should be possible to open a modal window
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    Then modal window should be displayed

    When I click "close" button in modal window
    Then modal window should not be displayed


@3
Scenario: It shouldn't be possible to add a doctor without "name" field
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    And I input "John Doe" value in "name" field

    When I click "save" button in modal window
    Then error message in "email" field should "be equal to" "Enter valid email"