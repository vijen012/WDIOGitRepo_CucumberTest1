Feature: Json and YML related scenarios

#  @ReadYml
#  Scenario: Read Numbers from YML and add them
#  Given read "Number1" and "Number2" from yml file "data.yml"
#
#  @ReadYml
#  Scenario: Read firstName and lastName from YML and joint them
#    Given read "firstName" and "lastName" from yml file "data.yml"
#
#  @ReadJson
#  Scenario: Read firstName and lastName from JSON and joint them
#    Given read "firstName" and "lastName" from JSON file "data.json"
#
#
#  @DeletePropFromJson
#  Scenario: Delete property from JSON file
#    Given Delete "startDate" from JSON file "data"


  @DeletePropFromJson
  Scenario: Delete property from JSON file
    Given Delete "IntentId" from JSON file "EA-CreateEntitlement"