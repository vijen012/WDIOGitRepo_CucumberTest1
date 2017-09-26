/**
 * Created by vmalav on 6/12/2017.
 */
const fs = require('fs')
var apiConf = require('../conf/wdio.conf.js')
var jsonData

module.exports = {
    loadJSONFile: function (fileName) {
        try{
            jsonData = JSON.parse(fs.readFileSync(apiConf.config.testDataDirPath + fileName + '.json', 'utf8'))
        }
        catch(e) {
            //console.log(e)
        }
        return jsonData
    },

    readJSONByKey: function (key) {
        return jsonData[key]
    },

    getFirstNameFromJson: function () {
        return jsonData.firstName
    },

    getLastNameFromJson: function () {
        return jsonData.lastName
    },

    deletePropFromJSON: function (propToDelete, jsonParseObj) {
        for(var prop in jsonParseObj) {
            if(prop == propToDelete) {
                delete jsonParseObj[propToDelete]
            }else if(jsonParseObj[prop] != null && typeof jsonParseObj[prop] === 'object') {
                this.deletePropFromJSON(propToDelete, jsonParseObj[prop])
            }
        }
        return jsonParseObj
    }


}