const BaseComponent = require('../common/base.component.js');

class AppointmentDelete extends BaseComponent{
    constructor() {
        super('[id="QuickDialog"]')
    }

    get deleteBtn() {
        return this.rootEl.$('[aria-label="Delete"]');
    }

    get cancelBtn() {
        return this.rootEl.$('[aria-label="Cancel"]');
    }
}

module.exports = AppointmentDelete;