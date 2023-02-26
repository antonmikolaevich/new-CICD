const BasePage = require('./base.page.js');
const {TodayAppointment} = require('../components');

class DashboardPage extends BasePage{

    constructor(){
        super("/showcase/angular/appointmentplanner/#/dashboard");
        this.todayAppointment = new TodayAppointment();
    }
}

module.exports = DashboardPage;