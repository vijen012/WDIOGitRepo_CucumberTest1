Feature: test oracle database

  Scenario: test connection with oracle database
    Given Get the database connection object
    When I execute the query "getEmpRecordByEmpNo" on oracleDatabase