describe("Test suite", () => {

    beforeEach(async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard")
      });

    it("Check title name", async () => {
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("Check that email is mandatory field", async () =>{
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").addValue("John Doe");
        await $("//button[text()='Save']").click();
 
        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email")
     });

     it("Check that name is mandatory field", async () =>{
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Email']").addValue("johndoe@gmail.com");
        await $("//button[text()='Save']").click();
 
        const emailError = await $("label#Name-info");
        expect(await emailError.getText()).toEqual("Enter valid name")
     });

    it("Add new patient", async () =>{
        await $("div.patients").click();
        await $("//button[text()='Add New Patient']").click();
        await $("input[name='Name']").addValue("Tim Walker");
        await $("//input[@id='DOB_input']").setValue("01/01/2001");
        await $("//input[@name='Email']").addValue("timwalker@gmail.com");
        await $("//input[@id='PatientMobile']").addValue("9999999999");
        await $("//button[text()='Save']").click();
 
        const NewPatient = await $("//span[text() ='Tim Walker']");
        expect(await NewPatient.isDisplayed())
     });

     it("Edit Doctor Details", async () =>{
        await $("div.doctors").click();
        await $("div[id='Specialist_1']").click();
        await $("//button[text()='Edit']").click();
        await $("input[name='Designation']").clearValue();
        await $("input[name='Designation']").addValue('Lead Specialist');
        await $("//button[text()='Save']").click();
        const designation = await $("div[class='designation']");
        expect(await designation.getText()).toEqual("Lead Specialist")
     });

     it("Cancel Appointment", async () =>{
        await $("//span[text()='Schedule']").click();
        await browser.pause(3000);
        await $("//div[@data-id='Appointment_1013']").click();
        await $("button[title='Delete']").click();
        await $(".e-control button[aria-label='Delete']").click();
        await browser.pause(3000);
        const cancelation = await $("//div[@data-id='Appointment_1013']").waitForExist({reverse: true});
        expect(cancelation).toEqual(true)
     });

});

