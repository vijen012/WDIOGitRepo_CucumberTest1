//let apiLib = require('../../utility/apiUtility').apiLib
// let apiUtility = new apiLib('http', 'httpbin.org')
var apiConfig = require('../../../wdio.conf').config
var apiResBody, apiResHeader, apiResStatusCode
var myStepDefinitionsWrapper = function () {

    this.When(/^I make a GET request to "([^"]*)"$/, function (apiName, callback) {
        apiConfig.apiUtility.setContentType(true)
        let uri = apiConfig.apiEndPoints[apiName]
        var apiResData = apiConfig.apiUtility.sendRequest('GET', uri);
        apiResStatusCode = apiResData.statusCode
        apiResHeader = apiResData.headers
        apiResBody = apiResData.body
        console.log("===", apiResBody)
    });
};

module.exports = myStepDefinitionsWrapper;