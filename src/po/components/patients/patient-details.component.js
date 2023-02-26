const BaseComponent = require('../common/base.component.js');

class PatientDetails extends BaseComponent{
    constructor() {
        super('.e-edit-dialog')
    }

    get editBtn() {
        return this.rootEl.$('button.edit-patient');
    }

    get deleteBtn() {
        return this.rootEl.$('button.delete-patient');
    }
}

module.exports = PatientDetails;