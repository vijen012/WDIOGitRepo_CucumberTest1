/**
 * Created by vmalav on 7/19/2017.
 */
let await = require('asyncawait/await')
// let async = require('asyncawait/async')
let request = require('request')
// let requestPromise = require('request-promise')

function apiLib(scheme, domain, variableChar) {
    this.domain = scheme + '://' + domain;
    this.requestHeaders = {};
    this.httpResponse = {};
    this.requestBody = '';
    this.queryParameters = {};
    this.httpResponseBody = '';
    this.httpResponseHeader = '';
    this.httpResponseStatusCode = '';
}

apiLib.prototype.setMultiRequestHeader = function(obj) {
    this.requestHeaders = obj;
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

apiLib.prototype.setHttpResponseBody = function(httpResponseBody){
    this.httpResponseBody = httpResponseBody
}

apiLib.prototype.getHttpResponseBody = function(){
    return this.httpResponseBody
}

apiLib.prototype.setHttpResponseHeader = function(httpResponseHeader){
    this.httpResponseHeader = httpResponseHeader
}

apiLib.prototype.getHttpResponseHeader = function(){
    return this.httpResponseHeader
}

apiLib.prototype.setHttpResponseStatusCode = function(httpResponseStatusCode){
    this.httpResponseStatusCode = httpResponseStatusCode
}

apiLib.prototype.getHttpResponseStatusCode = function(){
    return this.httpResponseStatusCode
}

apiLib.prototype.sendRequest = function(requestMethod, apiEndPointURL) {
    var options = {};
    options.url = apiEndPointURL;
    options.method = requestMethod;
    options.headers = this.requestHeaders;
    options.qs = this.queryParameters;
    options.body = this.requestBody;
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
    // console.log('===Method Type===', options.method, '\n===url===', options.url);
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