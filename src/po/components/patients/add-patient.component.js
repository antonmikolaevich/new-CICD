const BaseComponent = require('../common/base.component.js');

class AddPatientComponent extends BaseComponent{
    constructor() {
        super('.new-patient-dialog');
    }

    get saveBtn() {
        return this.rootEl.$('.e-footer-content button.e-primary');
    }

    get closeBtn() {
        return this.rootEl.$('.e-btn-icon');
    }

    input (name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#PatientMobile',
            email: '[name="Email"]',
            symptoms: '[name="Symptoms"]',
            dob: '[name="DOB"]'
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

    errorMsg(field) {
        const selectors = {
            name: '.e-error[for="Name"]',
            mobile: '.e-error[for="Mobile"]',
            email: '.e-error[for="Email"]'
        }
        return this.rootEl.$(selectors[field]);
    }
}
module.exports = AddPatientComponent;