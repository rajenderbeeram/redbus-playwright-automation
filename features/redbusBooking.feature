# Feature: RedBus End-to-End Booking

#   Scenario: Booking a bus from Mumbai to Pune on coming Saturday
#     Given I launch the RedBus website
#     When I search buses from "Mumbai" to "Pune" for this Saturday
#     And I click on "Search Buses"
#     And I apply filters: "Primo", "Evening", and "Live Tracking"
#     And I scroll and select the bus with the cheapest fare
#     And I select a seat and boarding & dropping points
#     And I fill contact and passenger details and opt for insurance
#     And I proceed with UPI payment using ID "rroushan40@okaxis"
#     Then I should see UPI payment confirmation or success page

    Feature: Bus Booking

  Scenario: Booking a bus from Mumbai to Pune on coming Saturday
    Given I launch the RedBus website
    When I search buses from "Mumbai" to "Pune" for this Saturday
    And I click on "Search Buses"
    And I apply filters: "Primo", "Evening", and "Live Tracking"
    And I scroll and select the bus with the cheapest fare
    And I select a seat and boarding & dropping points
    And I fill contact and passenger details and opt for insurance
    And I proceed with UPI payment using ID "rajenderbeeram-1@okaxis"