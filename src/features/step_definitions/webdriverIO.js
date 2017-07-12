/**
 * Created by vmalav on 6/16/2017.
 */
var chai =  require('chai')
var expect = chai.expect
var uiConfig = require('../../../wdio.web.conf').config


    var myStepDefinitionsWrapper = function () {

        this.Given(/^I navigate to \"(.*)\" url$/, function (url, callback) {
            browser.url(url)
            browser.windowHandleMaximize()
        })

        this.When(/^I click on "([^"]*)" element$/, function (pathSelectorKey, callback) {
            var pathSelectorValue = uiConfig.ymlUtility.getValueByKey(pathSelectorKey)
            var isCondition = uiConfig.uiUtility.waitForElementExist(pathSelectorValue)
            if(isCondition) {
                browser.click(pathSelectorValue)
                console.log(`==Clicked on '${pathSelectorKey}'`)
            }else {
                console.log(`Element '${pathSelectorKey}' doesn't exist`)
            }
        })

        this.When(/^I enter text "([^"]*)" in element "([^"]*)"$/, function (valueToBeEnter, pathSelectorKey, callback) {
            var pathSelectorValue = uiConfig.ymlUtility.getValueByKey(pathSelectorKey)
            var isCondition = uiConfig.uiUtility.waitForElementExist(pathSelectorValue)
            if(isCondition) {
                //browser.click(pathSelectorValue)
                browser.setValue(pathSelectorValue, valueToBeEnter)
                console.log(`==Enter value in '${pathSelectorKey}'`)
            }else {
                console.log(`Element '${pathSelectorKey}' doesn't exist`)
            }
        })


        this.Then(/^I should see "([^"]*)" page should display$/, function (pathSelectorKey, callback) {
            var pathSelectorValue = uiConfig.ymlUtility.getValueByKey(pathSelectorKey)
            var isCondition = uiConfig.uiUtility.waitForElementExist(pathSelectorValue)
            expect(isCondition, `Element '${pathSelectorKey}' doesn't display`).to.be.true
        });


        this.Then(/^I should see attribute "([^"]*)" value "([^"]*)" in "([^"]*)"$/, function (attributeName, valueToBeVerified, pathSelectorKey, callback) {
            var pathSelectorValue = uiConfig.ymlUtility.getValueByKey(pathSelectorKey)
            var isCondition = uiConfig.uiUtility.waitForElementExist(pathSelectorValue)
            expect(valueToBeVerified).to.equal(uiConfig.uiUtility.getElementAttributeValue(pathSelectorValue, attributeName))
        });
    }

    module.exports = myStepDefinitionsWrapper

