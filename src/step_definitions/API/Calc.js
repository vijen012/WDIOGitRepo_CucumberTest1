var chai =  require('chai');
var expect = chai.expect;
var apiConfig = require('../../conf/wdio.conf.js').config

var num1, num2, actualValue;

var myStepDefinitions = function () {

    this.Given(/^Number are (\d+) and (\d+)$/, function (arg1, arg2, callback) {
        //console.log("Sum of two number is: ", parseInt(arg1)+parseInt(arg2));
        num1  = parseInt(arg1);
        num2 = parseInt(arg2);
    });

    this.Given(/^Following are numbers$/, function (dataTable, callback) {
        dataTable = dataTable.hashes();
        //console.log("DataTable : ", dataTable.hashes());
        num1 = parseInt(dataTable[0].Num1);
        num2 = parseInt(dataTable[0].Num2);
    });

    this.When(/^I Press \"(.*)\" button$/, function (operationType, callback) {
        if (operationType == "Add") {
            actualValue = num1 + num2;
        }else if(operationType == "MultiPly"){
            actualValue = num1 * num2;
        }
    });

    this.Then(/^Sum of two number is (.*)$/, function (expectedValue, callback) {
        expect(parseInt(expectedValue)).to.equal(actualValue);
    });

    this.Then(/^Multiplication of two number is "([^"]*)"$/, function (expectedValue, callback) {
        expect(parseInt(expectedValue)).to.equal(actualValue)
    });

};

module.exports = myStepDefinitions;