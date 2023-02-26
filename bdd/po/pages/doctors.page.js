const BasePage = require('./base.page.js');
const {DoctorListHeader, AddDoctorComponent, SpecialistCardComponent, DoctorEdit, DoctorDetails} = require('../components');

class DoctorsPage extends BasePage{

    constructor() {
        super("/showcase/angular/appointmentplanner/#/doctors");
        this.doctorListHeader = new DoctorListHeader();
        this.addDoctorComponent = new AddDoctorComponent();
        this.doctorDetails = new DoctorDetails();
        this.doctorEdit = new DoctorEdit();
    }

    specialistCard(id) {
        return new SpecialistCardComponent(id);
    }
}

module.exports = DoctorsPage