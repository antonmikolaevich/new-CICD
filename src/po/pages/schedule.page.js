const BasePage = require('./base.page.js');
const {ScheduleComponent, AppointmentDetails, AppointmentDelete} = require('./../components');

class SchedulePage extends BasePage{

    constructor() {
        super("/showcase/angular/appointmentplanner/#/calendar");
        this.scheduleComponent = new ScheduleComponent();
        this.appointmentDetails = new AppointmentDetails();
        this.appointmentDelete = new AppointmentDelete();
    }
}

module.exports = SchedulePage