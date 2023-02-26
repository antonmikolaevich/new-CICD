const BaseComponent = require('../common/base.component.js');

class TodayAppointment extends BaseComponent{
    constructor() {
        super('.grid-container');
    } 


    doctor (name) {
        const selectors = {
            doctor1: 'a[href="#/doctor-details/1"]',
            doctor2: 'a[href="#/doctor-details/3"]',
            doctor3: 'a[href="#/doctor-details/5"]',
            doctor4: 'a[href="#/doctor-details/6"]',
        }
        return this.rootEl.$(selectors[name]);
    }

}
module.exports = TodayAppointment;