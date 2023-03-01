const axios = require("axios");
const {testUrl} = require("../config/endpoints.js");

const sendRequest = async (url, data = null, method="get") => {
    try {
        const response = await axios({
            method,
            url: `${testUrl}/${url}`,
            headers: {},
            data
        });
        return {
            status: response.status,
            data: response.data
        };
    } catch (error){
        return {
            status: error.response.status
        };
    }
};

module.exports = {
    sendRequest,
    testUrl
}