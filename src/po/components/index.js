const HeaderComponent = require('./common/header.component.js');
const SideMenuComponent = require('./common/sidemenu.component.js');

const TodayAppointment = require('./dashboard/today-appointment.component.js');

const DoctorListHeader = require('./doctors/list-header.component.js');
const AddDoctorComponent = require('./doctors/add-doctor.component.js');
const SpecialistCardComponent = require('./doctors/specialist-card.component.js');
const DoctorDetails = require('./doctors/doctor-details.component.js');
const DoctorEdit = require('./doctors/edit-doctor.component.js');

const PatientListHeader = require('./patients/list-header.component.js');
const AddPatientComponent = require('./patients/add-patient.component.js');
const PatientCardComponent = require('./patients/patient-card.component.js');
const PatientDetails = require('./patients/patient-details.component.js');
const PatientDelete = require('./patients/patient-delete.component.js');

const ScheduleComponent = require('./schedule/schedule-container.component.js');
const AppointmentDetails = require('./schedule/appointment-details.component.js');
const AppointmentDelete = require('./schedule/appointment-delete.component.js');

module.exports = {
    HeaderComponent,
    SideMenuComponent,
    TodayAppointment,
    DoctorListHeader,
    AddDoctorComponent,
    SpecialistCardComponent,
    DoctorDetails,
    DoctorEdit,
    PatientListHeader,
    AddPatientComponent,
    PatientCardComponent,
    PatientDetails,
    PatientDelete,
    ScheduleComponent,
    AppointmentDetails,
    AppointmentDelete
}