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