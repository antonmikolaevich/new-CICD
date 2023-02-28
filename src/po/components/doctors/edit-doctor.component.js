const BaseComponent = require('../common/base.component.js');

class DoctorEdit extends BaseComponent{
    constructor() {
        super('.new-doctor-dialog')
    }
    get designation() {
        return this.rootEl.$('[name="Designation"]');
    }

    /**
     * 
     * @param button {'save' | 'cancel'}
     */
    async clickButton(button) {
        if (button.toLowerCase() === 'save') {
            await this.saveBtn.click();
        } else {
            await this.cancelBtn.click();
        }
    }

    get saveBtn() {
        return this.rootEl.$('button.e-primary');
    }

    get cancelBtn() {
        return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
    }
}

module.exports = DoctorEdit;