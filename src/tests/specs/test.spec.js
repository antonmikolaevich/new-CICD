const {pages} = require('../../po');

describe("Test suite", () => {

    beforeEach(async () => {
        await pages('dashboard').open()
      });

    it("Check title name", async () => {
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("Check that email is mandatory field", async () =>{
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorComponent.rootEl.waitForDisplayed();
        await pages('doctors').addDoctorComponent.input('name').addValue("John Doe");
        await pages('doctors').addDoctorComponent.saveBtn.click();
 
        await expect(pages('doctors').addDoctorComponent.errorMsg('email')).toHaveText('Enter valid email');
     });

     it("Check that name is mandatory field", async () =>{
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorComponent.rootEl.waitForDisplayed();
        await pages('doctors').addDoctorComponent.input('email').addValue("johndoe@gmail.com");
        await pages('doctors').addDoctorComponent.saveBtn.click();
 
        await expect(pages('doctors').addDoctorComponent.errorMsg('name')).toHaveText('Enter valid name');
     });

      it("Check that mobile number is mandatory field", async () =>{
        await pages('dashboard').sideMenu.item('patients').click();
        await pages('patients').patientListHeader.addNewPatientBtn.click();
        await pages('patients').addPatientComponent.rootEl.waitForDisplayed();
        await pages('patients').addPatientComponent.input('name').addValue("Tom Wegk");
        await pages('patients').addPatientComponent.input('email').addValue("tomwegk@gmail.com");
        await pages('patients').addPatientComponent.input('phone').clearValue();
        await pages('patients').addPatientComponent.saveBtn.click();

        await expect(pages('patients').addPatientComponent.errorMsg('mobile')).toHaveText('Enter valid mobile number');
     });

    it("Add new patient", async () =>{
        await pages('dashboard').sideMenu.item('patients').click();
        await pages('patients').patientListHeader.addNewPatientBtn.click();
        await pages('patients').addPatientComponent.rootEl.waitForDisplayed();
        await pages('patients').addPatientComponent.input('name').addValue("Tim Walker");
        await pages('patients').addPatientComponent.input('dob').setValue("01/01/2001");
        await pages('patients').addPatientComponent.input('email').addValue("timwalker@gmail.com");
        await pages('patients').addPatientComponent.input('phone').setValue("9999999999");
        await pages('patients').addPatientComponent.saveBtn.click();
 
        await expect(pages('patients').patientCard(7).name).toHaveText('Tim Walker');
     });

     it("Edit Doctor Details", async () =>{
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').specialistCard(1).rootEl.click();
        await pages('doctors').doctorDetails.rootEl.waitForDisplayed();
        await pages('doctors').doctorDetails.editBtn.click();
        await pages('doctors').doctorEdit.rootEl.waitForDisplayed();
        await pages('doctors').doctorEdit.designation.clearValue();
        await pages('doctors').doctorEdit.designation.addValue('Lead Specialist');
        await pages('doctors').doctorEdit.saveBtn.click();
 
        await expect(pages('doctors').doctorDetails.designation).toHaveText('Lead Specialist');
     });

     it("Delete a patient", async () =>{
      await pages('dashboard').sideMenu.item('patients').click();
      await pages('patients').patientCard(1).name.click();
      await pages('patients').patientDetails.rootEl.waitForDisplayed();
      await pages('patients').patientDetails.deleteBtn.click();
      await pages('patients').patientDelete.rootEl.waitForDisplayed();
      await pages('patients').patientDelete.okBtn.click();

      await expect(pages('patients').patientCard(1).name).toHaveText('Adams');
      // const cancelation = await $("//span[text()='Milka']").waitForDisplayed({reverse: true});
      // expect(cancelation).toEqual(true);
   });

     it("Cancel Appointment", async () =>{
        await pages('dashboard').sideMenu.item('schedule').click();
        await pages('schedule').scheduleComponent.rootEl.waitForDisplayed();
        await pages('schedule').scheduleComponent.appointment.click();
        await pages('schedule').appointmentDetails.rootEl.waitForDisplayed({ timeout: 3000 });
        await pages('schedule').appointmentDetails.deleteBtn.click();
        await pages('schedule').appointmentDelete.rootEl.waitForDisplayed({ timeout: 3000 });
        await pages('schedule').appointmentDelete.deleteBtn.click();

      //   await expect(pages('schedule').scheduleComponent.appointment.waitForExist({reverse: true})).toEqual(true);
        const cancelation = await pages('schedule').scheduleComponent.appointment.waitForExist({reverse: true})
        expect(cancelation).toEqual(true);
     });

     it("Change calendar view", async () =>{
      await pages('dashboard').sideMenu.item('schedule').click();
      await pages('schedule').scheduleComponent.rootEl.waitForDisplayed();
      await pages('schedule').scheduleComponent.calendar('month').click();

      const changeCalendar = await pages('schedule').scheduleComponent.changedView.waitForExist();
      expect(changeCalendar).toEqual(true);
   });

   it("Search for patient", async () =>{
      await pages('dashboard').sideMenu.item('patients').click();
      await pages('patients').patientListHeader.patientSearch.setValue('Mercy');

      await expect(pages('patients').patientCard(0).name).toHaveText('Mercy');
   });

   it("execute() scenario", async () =>{
      await pages('dashboard').todayAppointment.rootEl.waitForDisplayed();
      const doctor = await pages('dashboard').todayAppointment.doctor('doctor2');
      await browser.execute(function(doctor) {
      doctor.style.border = 'green dashed 3px'}, doctor);
      // const patient = await $("//td[text()='Adams']");
      // await browser.execute(function(patient) {
      // patient.style.border = 'green dashed 3px'}, patient);
      await browser.pause(3000);
   });
 
   it("waitUntil() scenario", async () =>{
      await pages('dashboard').todayAppointment.doctor('doctor1').click();
      await browser.waitUntil(
      async() => await pages('doctors').doctorDetails.name.getText() === "Dr. Nembo Lukeni",
      {timeout: 5000, timeoutMsg: "not loaded"}
      );
   });

   it("browser actions: drag and drop", async () =>{
      await pages('dashboard').sideMenu.item('schedule').click();
      await pages('schedule').scheduleComponent.rootEl.waitForDisplayed();
      const elem = await pages('schedule').scheduleComponent.appointment;
      const target = await pages('schedule').scheduleComponent.targetPlace;
      await elem.dragAndDrop(target, {duration: 3000})
   });

   it("browser actions: moveTo", async () =>{
      await pages('dashboard').sideMenu.item('patients').click();
      const row = await pages('patients').patientCard(0).name;
      await row.moveTo();
      await browser.pause(5000);
   });

   it("cookies", async () =>{
      await browser.pause(3000);
      await browser.setCookies({
         name: "customCookies",
         value: "one"
      });
      await browser.pause(10000);
      const cookie = await browser.getCookies(["customCookies"]);
      console.log(cookie);
      await browser.deleteCookies(["customCookies"]);
      await browser.pause(10000);
   });

   it("local storage", async () =>{
      const key = "localStorageKey";
      const value = "localStorageValue";
      await browser.execute(function (key, value) {
      window.localStorage.setItem(key, value);
      window.localStorage.setItem(key, value);
      }, key, value);
      await browser.pause(10000);
      const readValue = await browser.execute(function (key) {
      return window.localStorage.getItem(key);
      }, key);
      console.log(readValue);
   })

   it("session storage", async () =>{
      const key = "sessionStorageKey";
      const value = "sessionStorageValue";
      await browser.execute(function (key, value) {
      window.sessionStorage.setItem(key, value);
      window.sessionStorage.setItem(key, value);
      }, key, value);
      await browser.pause(10000);
      const readValue = await browser.execute(function (key) {
      return window.sessionStorage.getItem(key);
      }, key);
      console.log(readValue);
   })
});




