const BaseComponent = require('../common/base.component.js');

class AddDoctorComponent extends BaseComponent{
    constructor() {
        super('.new-doctor-dialog');
    }

    get saveBtn() {
        return this.rootEl.$('.e-footer-content button.e-primary');
    }

    get closeBtn() {
        return this.rootEl.$('.e-btn-icon');
    }

    /**
     * 
     * @param button {'save' | 'close'}
     */
    async clickButton(button) {
        if (button.toLowerCase() === 'save') {
            await this.saveBtn.click();
        } else {
            await this.closeBtn.click();
        }
    }

    input (name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]'
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
module.exports = AddDoctorComponent;