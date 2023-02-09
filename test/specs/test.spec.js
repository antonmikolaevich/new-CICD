describe("Test suite", () => {

    beforeEach(async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard")
      });

    it("Check title name", async () => {
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("Check that email is mandatory field", async () =>{
        browser.waitUntil($(".sidebar-item").$$("doctors").isExisting() === true, {timeout:3000, timeoutMsg: "the element doesn't exist"})
        await $("div.doctors").click();
        browser.waitUntil($("//div[text()='DOCTORS LIST']").isDisplayed() === true, {timeout:3000})
        await $("//button[text()='Add New Doctor']").click();
        browser.waitUntil($("div#_title").isExisting() === true, {timeout:3000})
        await $("input[name='Name']").addValue("John Doe");
        await $("//button[text()='Save']").click();
 
        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email")
     });

     it("Check that name is mandatory field", async () =>{
        browser.waitUntil($("div.doctors").isExisting() === true, {timeout:3000})
        await $("div.doctors").click();
        browser.waitUntil($("//button[text()='Add New Doctor']").isClicable() === true, {timeout:5000})
        await $("//button[text()='Add New Doctor']").click();
        browser.waitUntil($("div#_title").isExisting() === true, {timeout:3000, timeoutMsg: "window is not loaded"})
        await $("input[name='Email']").addValue("johndoe@gmail.com");
        await $("//button[text()='Save']").click();
 
        const emailError = await $("label#Name-info");
        expect(await emailError.getText()).toEqual("Enter valid name")
     });

      it("Check that mobile number is mandatory field", async () =>{
        browser.waitUntil($(".sidebar-item").$$("patients").isExisting() === true, {timeout:3000})
        await $("div.patients").click();
        browser.waitUntil($("//div[text()='PATIENT LIST']").isDisplayed() === true, {timeout:3000, timeoutMsg: "element is not displayed"})
        await $("//button[text()='Add New Patient']").click();
        browser.waitUntil($("//div[text()='New Patient']").isExisting() === true, {timeout:5000})
        await $("input[name='Name']").addValue("Tom Wegk");
        await $("//input[@name='Email']").addValue("tomwegk@gmail.com");
        await $("input[name='Mobile']").clearValue();
        await $("//button[text()='Save']").click();
 
        const emailError = await $("label#undefined-info");
        expect(await emailError.getText()).toEqual("Enter valid mobile number")
     });

    it("Add new patient", async () =>{
        browser.waitUntil($("div.patients").isExisting() === true, {timeout:3000})
        await $("div.patients").click();
        browser.waitUntil($("//div[text()='PATIENT LIST']").isDisplayed() === true, {timeout:3000, timeoutMsg: "element is not displayed"})
        await $("//button[text()='Add New Patient']").click();
        browser.waitUntil($("div#_dialog-header").isExisting() === true, {timeout:3000})
        await $("input[name='Name']").addValue("Tim Walker");
        await $("//input[@id='DOB_input']").setValue("01/01/2001");
        await $("//input[@name='Email']").addValue("timwalker@gmail.com");
        await $("//input[@id='PatientMobile']").addValue("9999999999");
        await $("//button[text()='Save']").click();
 
        const NewPatient = await $("//span[text() ='Tim Walker']");
        expect(await NewPatient.isDisplayed())
     });

     it("Edit Doctor Details", async () =>{
        browser.waitUntil($("div.doctors").isExisting() === true, {timeout:3000})
        await $("div.doctors").click();
        browser.waitUntil($("//div[text()='DOCTORS LIST']").isDisplayed() === true, {timeout:3000})
        await $("div[id='Specialist_1']").click();
        browser.waitUntil($("//div[text()='DOCTORS DETAILS']").isDisplayed() === true, {timeout:3000, timeoutMsg: "element is not displayed"})
        await $("//button[text()='Edit']").click();
        browser.waitUntil($("div#_title").isExisting() === true, {timeout:3000})
        await $("input[name='Designation']").clearValue();
        await $("input[name='Designation']").addValue('Lead Specialist');
        await $("//button[text()='Save']").click();
        const designation = await $("div[class='designation']");
        expect(await designation.getText()).toEqual("Lead Specialist")
     });

     it("Delete a patient", async () =>{
      browser.waitUntil($("div.patients").isExisting() === true, {timeout:3000})
      await $("div.patients").click();
      browser.waitUntil($("//div[text()='PATIENT LIST']").isDisplayed() === true, {timeout:5000})
      await $("//span[text()='Milka']").click();
      browser.waitUntil($("button[title='Delete']").isClicable() === true, {timeout:5000, timeoutMsg: "element is not clicable"})
      await $("button[title='Delete']").click();
      browser.waitUntil($("//div[text()=' Are you sure you want to delete this patient? ']").isClicable() === true, {timeout:3000})
      await $("//button[text()='Ok']").click();
      const cancelation = await $("//span[text()='Milka']").waitForDisplayed({reverse: true});
      expect(cancelation).toEqual(true)
   });

     it("Cancel Appointment", async () =>{
        browser.waitUntil($("//span[text()='Schedule']").isDisplayed() === true, {timeout:3000})
        await $("//span[text()='Schedule']").click();
        browser.waitUntil($(".e-appointment").$$("Appointment_1013").isClicable() === true, {timeout:3000, timeoutMsg: "element is not clicable"})
        await $("//div[@data-id='Appointment_1013']").click();
        browser.waitUntil($("button[title='Delete']").isClicable() === true, {timeout:3000})
        await $("button[title='Delete']").click();
        browser.waitUntil($("div#QuickDialog_dialog-content").isClicable() === true, {timeout:3000})
        await $(".e-control button[aria-label='Delete']").click();
        const cancelation = await $("//div[@data-id='Appointment_1013']").waitForExist({reverse: true});
        expect(cancelation).toEqual(true)
     });

     it("Change calendar view", async () =>{
      await $("//span[text()='Schedule']").click();
      browser.waitUntil($("app-calendar").isDisplayed() === true, {timeout: 5000})
      await $("//span[text()='Month']").click();
      const changeCalendar = await $("//span[text()='August 2020']").waitForExist();
      expect(changeCalendar).toEqual(true)
   });

   it("Search for patient", async () =>{
      await $("div.patients").click();
      browser.waitUntil($("input#schedule_searchbar").isClicable() === true, {timeout: 5000});
      await $("input#schedule_searchbar").setValue('Mercy');
      browser.waitUntil($("//*[@id='grid_1627125836_2']").isExisting() === true);
      const foundPatient = await $("//span[@class='patient-name']").getText();
      expect(foundPatient).toEqual("Mercy")
   });
});


