const {Given, When} = require('@wdio/cucumber-framework');
const {pages} = require('../po')

Given('I open {string} page', function(pageName){
    return pages(pageName).open();
});

When('I click {string} link from the side menu', function(link){
    return pages('dashboard').sideMenu.item(link).click();
})

When('I click add new doctor button from list header', function() {
    return pages('doctors').doctorListHeader.addNewDoctorBtn.click();
})

When('I click {string} button in modal window', function(button) {
    return pages('doctors').addDoctorComponent.clickButton(button);
});

When('I input {string} value in {string} field', function(value, field) {
    return pages('doctors').addDoctorComponent.input(field).addValue(value);
});

When('I click on {int} specialist card', function(number) {
    return pages('doctors').specialistCard(number).rootEl.click();
});

When('I click {string} button on doctor details page', function(button) {
    return pages('doctors').doctorDetails.clickButton(button);
});

When('I change doctor designation to {string}', function(newValue) {
     return pages('doctors').doctorEdit.designation.setValue(newValue);
});

When('I click on {int} patient card', function(number) {
    return pages('patients').patientCard(number).name.click();
});

When('I click {string} button on patient details page', function(button) {
    return pages('patients').patientDetails.clickButton(button);
});

When('I click {string} button on patient delete page', function(button) {
    return pages('patients').patientDelete.clickButton(button);
});