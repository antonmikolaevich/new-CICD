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
Scenario Outline: It shouldn't be possible to add a doctor without "<field1>" field
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    And I input "<value>" value in "<field1>" field

    When I click "save" button in modal window
    Then error message in "<field2>" field should "be equal to" "<error>"
Examples:
|field1|field2|value            |error            |
|name  |email |John Doe         |Enter valid email|
|email |name  |johndoe@gmail.com|Enter valid name |

@4
Scenario: It should be possible to edit doctor details
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click on 1 specialist card
    Then doctor details page should be displayed

    When I click "edit" button on doctor details page
    Then doctor edit page should be displayed

    When I change doctor designation to "Lead Specialist"
    And I click "save" button in modal window
    Then value in designation field should "be equal to" "Lead Specialist"