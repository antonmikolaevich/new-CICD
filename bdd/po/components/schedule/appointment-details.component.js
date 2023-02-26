const BaseComponent = require('../common/base.component.js');

class AppointmentDetails extends BaseComponent{
    constructor() {
        super('.e-event-popup')
    }

    get editBtn() {
        return this.rootEl.$('button.e-event-edit');
    }

    get deleteBtn() {
        return this.rootEl.$('button.e-event-delete');
    }
}

module.exports = AppointmentDetails;