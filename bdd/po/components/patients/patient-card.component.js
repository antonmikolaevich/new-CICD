const BaseComponent = require('../common/base.component.js');

class PatientCardComponent extends BaseComponent{
    constructor(id) {
        super(`.e-templatecell[index='${id}']`)
    }

    get name() {
        return this.rootEl.$('.patient-name');
    }
}

module.exports = PatientCardComponent;