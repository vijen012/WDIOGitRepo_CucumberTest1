//let apiLib = require('../../utility/apiUtility').apiLib
// let apiUtility = new apiLib('http', 'httpbin.org')
var apiConfig = require('../../../wdio.conf').config
var apiResBody, apiResHeader, apiResStatusCode
var myStepDefinitionsWrapper = function () {

    this.When(/^I make a "([^"]*)" request to "([^"]*)"$/, function (reqMethod, apiName, callback) {
        apiConfig.apiUtility.setContentType(true)
        var apiResData = apiConfig.apiUtility.sendRequest(reqMethod, "http://localhost:4000/entitlement-service/v1/permissions");
        apiResStatusCode = apiResData.statusCode
        apiResHeader = apiResData.headers
        apiResBody = apiResData.body
        console.log("====StatusCode====", apiResStatusCode)
        console.log("====Header====", apiResHeader)
        console.log("====Body====", apiResBody)
    });
};
module.exports = myStepDefinitionsWrapper;