const BaseComponent = require('../common/base.component.js');

class DoctorDetails extends BaseComponent{
    constructor() {
        super('.doctor-details-container')
    }

    get name() {
        return this.rootEl.$('.name');
    }

    get designation() {
        return this.rootEl.$('.designation');
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
        return this.rootEl.$('button.edit-details');
    }

    get deleteBtn() {
        return this.rootEl.$('button.delete-details');
    }
}

module.exports = DoctorDetails;