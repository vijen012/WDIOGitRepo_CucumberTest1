/**
 * Created by vmalav on 6/16/2017.
 */
var chai =  require('chai')
var expect = chai.expect
var apiConfig = require('../../conf/wdio.conf.js').config



var myStepDefinitionsWrapper = function () {

    this.Given(/^Get the database connection object$/, function (callback) {
        apiConfig.oracleDbLib.createOracleDbConnection(apiConfig.oracleDbConfig)
    })

    this.When(/^I execute the query "([^"]*)" on oracleDatabase$/, function (sqlQueryKey, callback) {
        //var sqlQuery = 'Select * from COMPANY.EMP Where DEPTNO=10'
        var sqlQuery = apiConfig.ymlUtility.loadYmlAndGetValueByKey('sqlQuery', sqlQueryKey)
        apiConfig.oracleDbLib.getResultSet(sqlQuery).then(function(result){
            console.log("SQL Query Result", result.rows[0].EMPNO)
        })
    });
}
module.exports = myStepDefinitionsWrapper;