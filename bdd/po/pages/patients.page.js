const BasePage = require('./base.page.js');
const {PatientListHeader, AddPatientComponent, PatientCardComponent, PatientDetails, PatientDelete} = require('../components');

class PatientsPage extends BasePage{

    constructor() {
        super("/showcase/angular/appointmentplanner/#/patients");
        this.patientListHeader = new PatientListHeader();
        this.addPatientComponent = new AddPatientComponent();
        this.patientDetails = new PatientDetails();
        this.patientDelete = new PatientDelete();
    }

    patientCard(id) {
        return new PatientCardComponent(id);
    }
}

module.exports = PatientsPage