/**
 * Created by vmalav on 9/26/2017.
 */
const environmentURLs = require('../environment/EnvironmentURLs.json').EnvironmentURL

function fwSupportLib() {
    console.log('fwSupportLib Initialized')
}

fwSupportLib.prototype.getEnvironmentURL = function (executionEnv) {
    return environmentURLs[executionEnv]
}
fwSupportLib.prototype.getEndPointURL = function(endPoint, executionEnv){
    const apiEndPointFileName = endPoint.split('_')[0] + '_EndPoint.json'
    const apiEndPointJSON = require(`../apiEndPoints/${apiEndPointFileName}`)['APIEndPoint']
    const targetEndPointURL = apiEndPointJSON[endPoint].replace('{host}', this.getEnvironmentURL(executionEnv))
    return targetEndPointURL
}

exports.fwSupportLib = fwSupportLib
