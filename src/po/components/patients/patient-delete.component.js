const BaseComponent = require('../common/base.component.js');

class PatientDelete extends BaseComponent{
    constructor() {
        super('.break-hour-dialog')
    }

    async clickButton(button) {
        if (button.toLowerCase() === 'ok') {
            await this.okBtn.click();
        } else {
            await this.cancelBtn.click();
        }
    }

    get okBtn() {
        return this.rootEl.$('button.e-primary');
    }

    get cancelBtn() {
        return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
    }
}

module.exports = PatientDelete;