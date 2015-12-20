Feature: Calendar feature
	As a calendar user
	I want to display default events on the calendar
	So that I can check the previously registered events

	Scenario: Open the application
		Given I open the application
		Then I should be on the first tab

	Scenario: Default events
		Given I open the application
		Then The default events are displayed
