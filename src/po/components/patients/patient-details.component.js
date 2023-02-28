const BaseComponent = require('../common/base.component.js');

class PatientDetails extends BaseComponent{
    constructor() {
        super('.e-edit-dialog')
    }

    /**
     * 
     * @param button {'edit' | 'delete'}
     */
    async clickButton(button) {
        if (button.toLowerCase() === 'edit') {
            await this.editBtn.click();
        } else {
            await this.deleteBtn.click();
        }
    }

    get editBtn() {
        return this.rootEl.$('button.edit-patient');
    }

    get deleteBtn() {
        return this.rootEl.$('button.delete-patient');
    }
}

module.exports = PatientDetails;