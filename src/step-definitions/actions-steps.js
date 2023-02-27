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
