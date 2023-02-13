describe("Test suite", () => {

    beforeEach(async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard")
      });

    it("Check title name", async () => {
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("Check that email is mandatory field", async () =>{
        await browser.click($("div.doctors"));
        await browser.click($("//button[text()='Add New Doctor']"));
        await $("input[name='Name']").addValue("John Doe");
        await browser.click($("//button[text()='Save']"));
 
        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
     });

     it("Check that name is mandatory field", async () =>{
        await browser.click($("div.doctors"));
        await browser.click($("//button[text()='Add New Doctor']"));
        await $("input[name='Email']").addValue("johndoe@gmail.com");
        await browser.click($("//button[text()='Save']"));
 
        const emailError = await $("label#Name-info");
        expect(await emailError.getText()).toEqual("Enter valid name");
     });

      it("Check that mobile number is mandatory field", async () =>{
        await browser.click($("div.patients"));
        await browser.click($("//button[text()='Add New Patient']"));
        await $("input[name='Name']").addValue("Tom Wegk");
        await $("//input[@name='Email']").addValue("tomwegk@gmail.com");
        await $("input[name='Mobile']").clearValue();
        await browser.click($("//button[text()='Save']"));
 
        const emailError = await $("label#undefined-info");
        expect(await emailError.getText()).toEqual("Enter valid mobile number");
     });

    it("Add new patient", async () =>{
        await browser.click($("div.patients"));
        await browser.click($("//button[text()='Add New Patient']"));
        await $("input[name='Name']").addValue("Tim Walker");
        await $("//input[@id='DOB_input']").setValue("01/01/2001");
        await $("//input[@name='Email']").addValue("timwalker@gmail.com");
        await $("//input[@id='PatientMobile']").addValue("9999999999");
        await browser.click($("//button[text()='Save']"));
 
        const NewPatient = await $("//span[text() ='Tim Walker']");
        expect(await NewPatient.isDisplayed());
     });

     it("Edit Doctor Details", async () =>{
        await browser.click($("div.doctors"));
        await browser.click($("div[id='Specialist_1']"));
        await browser.click($("//button[text()='Edit']"));
        await $("input[name='Designation']").clearValue();
        await $("input[name='Designation']").addValue('Lead Specialist');
        await browser.click($("//button[text()='Save']"));

        const designation = await $("div[class='designation']");
        expect(await designation.getText()).toEqual("Lead Specialist")
     });

     it("Delete a patient", async () =>{
      await browser.click($("div.patients"));
      await browser.click($("//span[text()='Milka']"));
      await browser.click($("button[title='Delete']"));
      await browser.click($("//button[text()='Ok']"));

      const cancelation = await $("//span[text()='Milka']").waitForDisplayed({reverse: true});
      expect(cancelation).toEqual(true);
   });

     it("Cancel Appointment", async () =>{
        await browser.click($("//span[text()='Schedule']"));
        await browser.click($("//div[@data-id='Appointment_1013']"));
        await browser.click($("button[title='Delete']"));
        await browser.click($(".e-control button[aria-label='Delete']"));

        const cancelation = await $("//div[@data-id='Appointment_1013']").waitForExist({reverse: true});
        expect(cancelation).toEqual(true);
     });

     it("Change calendar view", async () =>{
      await browser.click($("//span[text()='Schedule']"));
      await browser.click($("//span[text()='Month']"));

      const changeCalendar = await $("//span[text()='August 2020']").waitForExist();
      expect(changeCalendar).toEqual(true);
   });

   it("Search for patient", async () =>{
      await browser.click($("div.patients"));
      await $("input#schedule_searchbar").setValue('Mercy');

      const foundPatient = await $("//span[@class='patient-name']").getText();
      expect(foundPatient).toEqual("Mercy");
   });

   it("execute() scenario", async () =>{
      const patient = await $("//td[text()='Adams']");
      await browser.execute(function(patient) {
      patient.style.border = 'green dashed 3px'}, patient);
      await browser.pause(3000);
   });
 
   it("waitUntil() scenario", async () =>{
      await browser.click($("a[href='#/doctor-details/1']"));
      await browser.waitUntil(
      async() => await $("//div[@class='name']").getText() === "Dr. Nembo Lukeni",
      {timeout: 5000, timeoutMsg: "not loaded"}
      );
   });

   it("browser actions: drag and drop", async () =>{
      await browser.click($("//span[text()='Schedule']"));
      const elem = await $("//div[@data-id='Appointment_1013']");
      const target = await $("//td[@data-date='1596355200000']");
      await elem.dragAndDrop(target)
   });

   it("browser actions: moveTo", async () =>{
      await browser.click($("div.patients"));
      const row = await $("div.e-content tbody tr:first-child")
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




