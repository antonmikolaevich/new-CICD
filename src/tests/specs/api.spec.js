const {sendRequest} = require("../../helpers/api.helper");
const testData = require("../../config/data.json");
const updatedData = require("../../config/updatedData.json");
describe("API Test Suite", () => {

     it("POST resource", async() => {
        const response = await sendRequest("albums", testData, "post")
        expect(response.status).to.equal(201);
        console.log(response)
     });

     it("GET a resource", async() => {
        const response = await sendRequest("albums/1");
        expect(response.data.userId).to.equal(1);
        expect(response.data.title).to.equal("quidem molestiae enim");
        expect(response.status).to.equal(200);
     })

     it("GET all resources", async() => {
        const response = await sendRequest("albums");
        expect(response.status).to.equal(200);
        expect(Object.keys(response.data).length).to.equal(100)
     })

     it("GET nested resources + filtering", async() => {
        const response = await sendRequest("albums/1/photos?id=5");
        expect(response.status).to.equal(200);
        console.log(response.data)
     })

     it("PUT resource", async() => {
        const response = await sendRequest("albums/1", updatedData, "put");
        expect(response.status).to.equal(200);
        expect(response.data.title).to.equal("oldPhotos");
        console.log(response)
     })

     it("DELETE resource", async() => {
        const response = await sendRequest("albums/100", "delete");
        expect(response.status).to.equal(200);
     })
})
