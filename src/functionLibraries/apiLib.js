/**
 * Created by vmalav on 7/19/2017.
 */
let await = require('asyncawait/await')
// let async = require('asyncawait/async')
let request = require('request')
// let requestPromise = require('request-promise')
// module.exports={
//     sendRequest: sendRequest
// }

function apiLib(scheme, domain, variableChar) {
    this.domain = scheme + '://' + domain;
    this.headers = {};
    this.httpResponse = {};
    this.requestBody = '';
    this.scenarioVariables = {};
    this.queryParameters = {};
    this.variableChar = (variableChar ? variableChar : '`');
    this.schemaResponse = {};
}

apiLib.prototype.setMultiRequestHeader = function(obj) {
    this.headers = obj;
    this.multiHeader = true;
}

apiLib.prototype.setRequestBody = function(body) {
    this.requestBody = body;
}

apiLib.prototype.getResponseObject = function() {
    return this.httpResponse;
}

apiLib.prototype.setContentType = function(contentType){
    this.json = contentType;
}

apiLib.prototype.sendRequest = function(requestMethod, url) {
    var options = {};
    options.url = url;
    options.method = requestMethod;
    options.headers = this.headers;
    options.qs = this.queryParameters;
    // options.body = this.requestBody;
    options.proxy = process.env.HTTP_PROXY;
    options.rejectUnauthorized = false;
    // options.resolveWithFullResponse = true;
    // options.jar = true;
    // options.simple = false;

    if (this.json === true) {
        options.json = true;
    }
    if (requestMethod !== 'OPTIONS') {
        options.followRedirect = false;
    }
    // console.log('===Method Type===', options.method, '\n===url===', url);
    await(function sendRequestData(callback) {
          request(options, function(error, response){
             if(error){
                 return callback(null, error);
             }else{
                 this.httpResponse = response
                 callback(null, response)
             }
         }.bind(this))
     }.bind(this))
    return this.httpResponse;
}


exports.apiLib = apiLib;