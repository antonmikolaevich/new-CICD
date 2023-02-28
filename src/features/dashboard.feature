@dashboard
Feature: Dashboard

@1
Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App"
    Given I open "Dashboard" page
    Then Page title should "be equal to" "Appointment Planner - Syncfusion Angular Components Showcase App"
