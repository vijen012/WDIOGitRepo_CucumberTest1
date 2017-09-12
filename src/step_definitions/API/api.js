var apiConfig = require('../../conf/wdio.conf.js').config
var apiResBody, apiResHeader, apiResStatusCode
var myStepDefinitionsWrapper = function () {

    this.When(/^I make a GET request to "([^"]*)" endPoint$/, function (apiName, callback) {
        apiConfig.apiLib.setContentType(true)
        let uri = apiConfig.apiEndPoints[apiName]
        var apiResData = apiConfig.apiLib.sendRequest('GET', uri);
        apiResStatusCode = apiResData.statusCode
        apiResHeader = apiResData.headers
        apiResBody = apiResData.body
        console.log("===", apiResBody)
    });
};

module.exports = myStepDefinitionsWrapper;