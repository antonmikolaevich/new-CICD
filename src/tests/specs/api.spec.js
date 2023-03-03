var tags = require('mocha-tags');
const {sendRequest} = require("../../helpers/api.helper");
const testData = require("../../config/data.json");
const updatedData = require("../../config/updatedData.json");
tags('api').describe("API Test Suite", () => {
    
     it("POST resource", async() => {
        const response = await sendRequest("pet", testData, "post")
        expect(response.status).to.equal(200);
     });

     it("GET a resource", async() => {
        const response = await sendRequest("pet/55");
        expect(response.status).to.equal(200);
        expect(response.data.category.name).to.equal("cat")
        expect(response.data.name).to.equal("Jim")
     })

      it("PUT resource", async() => {
        const response = await sendRequest("pet", updatedData, "put");
        expect(response.status).to.equal(200);
        expect(response.data.status).to.equal("unavailable");
     })

     it("DELETE resource", async() => {
        const response = await sendRequest("pet/55", null, "delete");
        expect(response.status).to.equal(200);
        expect(response.data.message).to.equal('55');
        expect(response.data.type).to.equal('unknown');
     })

     it("GET a resource", async() => {
        const response = await sendRequest("pet/55");
        expect(response.status).to.equal(404);
     })

     
})
