const BaseComponent = require('../common/base.component.js');

class DoctorEdit extends BaseComponent{
    constructor() {
        super('.new-doctor-dialog')
    }
    get designation() {
        return this.rootEl.$('[name="Designation"]');
    }

    get saveBtn() {
        return this.rootEl.$('button.e-primary');
    }

    // get cancelBtn() {
    //     return this.rootEl.$('button.delete-patient');
    // }
}

module.exports = DoctorEdit;