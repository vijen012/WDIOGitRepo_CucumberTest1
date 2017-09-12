Feature: test Api

##gulp APITest --env local --ff FirstAPI*

  Scenario: test google api
    When I make a GET request to "GetPermission" endPoint
