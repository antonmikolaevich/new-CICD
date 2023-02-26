const BaseComponent = require('../common/base.component.js');

class TodayAppointment extends BaseComponent{
    constructor() {
        super('.grid-container');
    } 

    // set takeDoctor(id) {
    //     // eslint-disable-next-line no-setter-return
    //     return $(`a[href="#/doctor-details/${id}"]`)
    // }

    // doctor (name, index) {
    //     const selectors = {
    //         doctor1: takeDoctor(index),
    //         doctor2: takeDoctor(index),
    //         doctor3: takeDoctor(index),
    //         doctor4: takeDoctor(index),
    //     }
    //     return this.rootEl.$(selectors[name]);
    // }

    
    doctor (name, id) {
        const elemSelector = `a[href='#/doctor-details/${id}']`
        const selectors = {
            doctor1: elemSelector,
            doctor2: elemSelector,
            doctor3: elemSelector,
            doctor4: elemSelector,
        }
        return this.rootEl.$(selectors[name]);
    }

}
module.exports = TodayAppointment;