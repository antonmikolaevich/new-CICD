const BaseComponent = require('../common/base.component.js');

class PatientListHeader extends BaseComponent{
    constructor() {
        super('.patient-operations');
    }

    get addNewPatientBtn() {
        return this.rootEl.$('button.e-control');
    }

    get patientSearch() {
        return this.rootEl.$('input.e-input');
    }
}
module.exports = PatientListHeader;