/**
 * Created by vmalav on 6/18/2017.
 */

module.exports = {

    waitForElementExist: function (pathSelectorValue) {
                     return browser.waitUntil(function () {
                       return browser.isExisting(pathSelectorValue) === true
                    }, 30000, `UI element ${pathSelectorValue} doesn't exist`, 2000)
    },

    waitForElementEnable: function (pathSelectorValue) {
        return browser.waitUntil(function () {
            return browser.isEnabled(pathSelectorValue) === true
        }, 30000, `UI element ${pathSelectorValue} not enabled`, 2000)
    },

    waitForElementVisible: function (pathSelectorValue) {
        return browser.waitUntil(function () {
            return browser.isVisible(pathSelectorValue) === true
        }, 30000, `UI element ${pathSelectorValue} doesn't visible`, 2000)
    },

    getElementAttributeValue : function(pathSelectorValue, attributeName) {
      return browser.getAttribute(pathSelectorValue, attributeName)
    }
}
