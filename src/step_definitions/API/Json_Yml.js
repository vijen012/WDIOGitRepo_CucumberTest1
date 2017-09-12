var chai =  require('chai');
var expect = chai.expect;
// var ymlUtility = require('../../utility/yamlLib.js')
// var jsonUtility = require('../../utility/jsonLib.js')
var apiConfig = require('../../conf/wdio.conf.js').config

var num1, num2, actualValue;

var myStepDefinitions = function () {

    this.Given(/^read "([^"]*)" and "([^"]*)" from yml file "([^"]*)"$/, function (arg1, arg2, fileName, callback) {
        apiConfig.ymlLib.loadYml(fileName)
        num1 = apiConfig.ymlLib.getValueByKey(arg1)
        num2 = apiConfig.ymlLib.getValueByKey(arg2)
        console.log("Result : ", num1 + num2)
    });

    this.Given(/^read "([^"]*)" and "([^"]*)" from JSON file "([^"]*)"$/, function (arg1, arg2, fileName, callback) {

        var obj = apiConfig.jsonLib.loadJSONFile(fileName)
        num1 = apiConfig.jsonLib.readJSONByKey(arg1)
        num2 = apiConfig.jsonLib.readJSONByKey(arg2)
        console.log("Result-1 : ", num1 + num2)
        num1 = apiConfig.jsonLib.getFirstNameFromJson()
        num2 = apiConfig.jsonLib.getLastNameFromJson()
        console.log("Result-2 : ", num1 + num2)
    });


    this.Given(/^Delete "([^"]*)" from JSON file "([^"]*)"$/, function (propertyName, jsonFileName, callback) {
        var obj = apiConfig.jsonLib.loadJSONFile(jsonFileName)
        console.log("Before Delete : ", JSON.stringify(obj, null, "\t"))
        obj = apiConfig.jsonLib.deletePropFromJSON(propertyName, obj)
        console.log("After Delete : ", JSON.stringify(obj, null, "\t"))
    });

};

module.exports = myStepDefinitions;