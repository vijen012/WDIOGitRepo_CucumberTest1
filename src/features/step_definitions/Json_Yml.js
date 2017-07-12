var chai =  require('chai');
var expect = chai.expect;
// var ymlUtility = require('../../utility/yamlUtility.js')
// var jsonUtility = require('../../utility/jsonUtility.js')
var apiConfig = require('../../../wdio.conf').config

var num1, num2, actualValue;

var myStepDefinitions = function () {

    this.Given(/^read "([^"]*)" and "([^"]*)" from yml file "([^"]*)"$/, function (arg1, arg2, fileName, callback) {
        apiConfig.ymlUtility.loadYml(fileName)
        num1 = apiConfig.ymlUtility.getValueByKey(arg1)
        num2 = apiConfig.ymlUtility.getValueByKey(arg2)
        console.log("Result : ", num1 + num2)
    });

    this.Given(/^read "([^"]*)" and "([^"]*)" from JSON file "([^"]*)"$/, function (arg1, arg2, fileName, callback) {

        var obj = apiConfig.jsonUtility.loadJSONFile(fileName)
        num1 = apiConfig.jsonUtility.readJSONByKey(arg1)
        num2 = apiConfig.jsonUtility.readJSONByKey(arg2)
        console.log("Result-1 : ", num1 + num2)
        num1 = apiConfig.jsonUtility.getFirstNameFromJson()
        num2 = apiConfig.jsonUtility.getLastNameFromJson()
        console.log("Result-2 : ", num1 + num2)
    });


    this.Given(/^Delete "([^"]*)" from JSON file "([^"]*)"$/, function (propertyName, jsonFileName, callback) {
        var obj = apiConfig.jsonUtility.loadJSONFile(jsonFileName)
        console.log("Before Delete : ", JSON.stringify(obj, null, "\t"))
        obj = apiConfig.jsonUtility.deletePropFromJSON(propertyName, obj)
        console.log("After Delete : ", JSON.stringify(obj, null, "\t"))
    });

};

module.exports = myStepDefinitions;