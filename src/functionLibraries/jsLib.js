/**
 * Created by vmalav on 9/13/2017.
 */

function jsLib(){
//jsLib constructor
}

jsLib.prototype.getTransformValue = function (inputString) {
    return jsLib.prototype.isNumeric(inputString) ? parseInt(inputString) : inputString
}

jsLib.prototype.isNumeric = function (inputString) {
    return !isNaN(inputString) ? true : false
}
exports.jsLib = jsLib