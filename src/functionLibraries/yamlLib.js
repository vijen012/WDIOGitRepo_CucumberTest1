/**
 * Created by vmalav on 6/12/2017.
 */
const yml = require('js-yaml')
const fs = require('fs')
var apiConf = require('../conf/wdio.conf.js')

var ymlData

module.exports = {
    loadYml: function (fileName) {
                try {
                     ymlData = yml.safeLoad(fs.readFileSync(apiConf.config.testDataDirPath + fileName + ".yml", 'utf8'))
                }
                catch (e) {
                    // console.log(e)
                }
            },

    getValueByKey: function (key) {
                    return ymlData[key]
    },

    loadYmlAndGetValueByKey: function (fileName, key) {
        this.loadYml(fileName)
        return ymlData[key]
    }

}


