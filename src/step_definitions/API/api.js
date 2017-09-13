const apiConfig = require('../../conf/wdio.conf.js').config
const apiLib = apiConfig.apiLib
const chai =  require('chai');
const expect = chai.expect;
var myStepDefinitionsWrapper = function () {

    this.When(/^I make a GET request to "([^"]*)" endPoint$/, function (apiEndPoint, callback) {
        let apiEndPointURL = apiConfig.apiEndPoints[apiEndPoint]
        apiLib.setContentType(true)
        apiLib.setRequestBody('')
        var apiResData = apiLib.sendRequest('GET', apiEndPointURL);
        apiLib.setHttpResponseStatusCode(apiResData.statusCode)
        apiLib.setHttpResponseHeader(apiResData.headers)
        apiLib.setHttpResponseBody(apiResData.body)
        console.log(`=====${apiEndPoint} response=====>\n`, apiLib.getHttpResponseBody())
    });

    this.Then(/^I should see http response statusCode "([^"]*)" in API response$/, function (expectedHttpResStatusCode, callback) {
        expect(parseInt(expectedHttpResStatusCode)).to.equal(apiLib.getHttpResponseStatusCode(), `expected and actual status code doesn't match`)
    });

    this.Then(/^I should see "([^"]*)" value "([^"]*)" in API response name object$/, function (key, expectedValue, callback) {
        expect(expectedValue).to.equal(apiLib.getHttpResponseBody()['name'][key], `actual and expected value doesn't match`)
    });

    this.Then(/^I should see "([^"]*)" value "([^"]*)" in API response object$/, function (key, expectedValue, callback) {
        expect(apiConfig.jsLib.getTransformValue(expectedValue)).to.equal(apiLib.getHttpResponseBody()[key])
    });
};

module.exports = myStepDefinitionsWrapper;