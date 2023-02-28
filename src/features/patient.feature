@patients
Feature: patients

@5
Scenario: It should be possible to delete a patient
    When I open "Dashboard" page
    And I click "Patients" link from the side menu
    And I click on 1 patient card
    Then patient details page should be displayed

    When I click "delete" button on patient details page
    And I click "ok" button on patient delete page
    Then patient 1 should not have "Milka" name
