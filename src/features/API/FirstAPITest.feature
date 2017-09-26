Feature: test Api

##gulp APITest --env local --ff FirstAPI*

  Scenario: test google api
    When I make a GET request to "XAPI_GetUserDetails" endPoint
    Then I should see http response statusCode "200" in API response
     And I should see "firstName" value "Vijen" in API response name object
     And I should see "lastName" value "Malav" in API response name object
     And I should see "age" value "25" in API response object
