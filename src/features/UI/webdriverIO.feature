Feature: validate webdriverio website

  @webdriverio
  Scenario: validate webdriverio api page
    Given I navigate to "http://webdriver.io/" url
    When I click on "WDIOHome APILink" element
    Then I should see attribute "placeholder" value "Search..." in "WDIOAPI SearchTextBox"

    @webdriverio
  Scenario: validate webdriverio api page
    Given I navigate to "http://webdriver.io/" url
    When I click on "WDIOHome APILink" element
    And I enter text "waitForExist" in element "WDIOAPI SearchTextBox"
    And I click on "WDIOAPI WaitForExistLink" element
    Then I should see "WDIOAPI WaitForExistElement" page should display

