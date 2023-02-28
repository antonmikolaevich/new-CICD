const {Then} = require('@wdio/cucumber-framework');
const {pages} = require('../po');
const compareText = require('./utils/compare-text');

Then('Page title should {string} {string}', async function(shouldBeParameter, titleText){
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter);
});

Then(/^modal window should( not)? be displayed$/, async (notArg) => {
    let assert = expect(pages('doctors').addDoctorComponent.rootEl);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toBeDisplayed();
})

Then('error message in {string} field should {string} {string}', async function(field, shouldBeParameter, expectedMsg) {
    const actualMsg = await pages('doctors').addDoctorComponent.errorMsg(field).getText();
    return compareText(actualMsg, expectedMsg, shouldBeParameter); 
})

Then(/^doctor details page should( not)? be displayed$/, async (notArg) => {
    let assert = expect(pages('doctors').doctorDetails.rootEl);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toBeDisplayed();
})

Then(/^doctor edit page should( not)? be displayed$/, async (notArg) => {
    let assert = expect(pages('doctors').doctorEdit.rootEl);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toBeDisplayed();
})

Then('value in designation field should {string} {string}', async function(shouldBeParameter, designation) {
    const newDesignation = await pages('doctors').doctorDetails.designation.getText();
    return compareText(newDesignation, designation, shouldBeParameter); 
})

Then(/^patient details page should( not)? be displayed$/, async (notArg) => {
    let assert = expect(pages('patients').patientDetails.rootEl);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toBeDisplayed();
})

Then(/^patient (.*) should( not)? have "(.*)" name$/, async (number, notArg, patientName) => {
    let assert = expect(pages('patients').patientCard(number).name);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toHaveText(patientName);
})