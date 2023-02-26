const BaseComponent = require('../common/base.component.js');

class DoctorListHeader extends BaseComponent{
    constructor() {
        super('.specialization-types');
    }

    get addNewDoctorBtn() {
        return this.rootEl.$('button.e-control');
    }
}
module.exports = DoctorListHeader;