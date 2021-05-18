# Merged Requirements

Requirement Exp236

Needs to be a container for the homepage dashboard that can hold multiple cards
Each card needs to have its own rules/logic and be a stand-alone activity that is inserted into the carousel as a different Adobe Target activity
If a user has no cards available for him/her then the container should not show
if multiple cards are shown, then the cards should be scrollable sideways
needs to include the greeting and first name (if user is signed in)
Needs to work on Homepage, DLP, PLP, PDP
NEW: little X on the cards to remove individual messages - if all messages have been removed by a user, then the dashboard should disappear (as shown in the working prototype)
NEW: track every interaction (seen, closing, swiping, clicking) - unless there are any disadvantages in doing so
Epic Link:Ladingpage Dashboard | Personalised Experiences



Requirements Exp 179

Audience trigger:

is (soft-)logged in
has items in basket
Days since last visit is less than 4 (i.e. 0-3 days)
AND if Days since last visit = 0, THEN exclude hours 10AM - 2PM
Control: either no dashboard or Spark Reminder (Exp78), if applicable 

Variant: 

Scenario1: Sparks offers are available - Basket reminder will be added as second button next to Sparks reminder
Scenario2: No Sparks offers - Basket reminder will show as only button in dashboard


Trigger logic

	We need to retest this with amended time trigger logic as a 50/50 A/B test

Audience trigger:
 * has items in basket
 * Days since last visit is less than 4 (i.e. 0-3 days)
 * AND if Days since last visit = 0, THEN exclude hours 10AM - 2PM

Control: either no dashboard or Spark Reminder (Exp78), if applicable 

Variant: 
 * Scenario1: Sparks offers are available - Basket reminder will be added as second button next to Sparks reminder
 * Scenario2: No Sparks offers - Basket reminder will show as only button in dashboard



We need to retest this with amended time trigger logic as a 50/50 A/B test

Audience trigger:
 * is (soft-)logged in
 * has items in basket
 * Days since last visit is less than 4 (i.e. 0-3 days)
 * AND if Days since last visit = 0, THEN exclude hours 10AM - 2PM

Control: either no dashboard or Spark Reminder (Exp78), if applicable 

Variant: 
 * Scenario1: Sparks offers are available - Basket reminder will be added as second button next to Sparks reminder
 * Scenario2: No Sparks offers - Basket reminder will show as only button in dashboard



Exp 237

* needs to be a container for the homepage dashboard that can hold multiple cards - each card needs to have it's own rules/logic 
 * if a user has no cards available for him/her then the container should not show
 * if multiple cards are shown, then the cards should be scrollable sideways
 * needs to include the greeting and first name (if user is signed in)
 * Needs to work on Homepage, DLP, PLP, PDP


 needs to be a container for the homepage dashboard that can hold multiple cards - each card needs to have it's own rules/logic 
 * if a user has no cards available for him/her then the container should not show
 * if multiple cards are shown, then the cards should be scrollable sideways
 * needs to include the greeting and first name (if user is signed in)
 * Needs to work on Homepage, DLP, PLP, PDP
 * NEW: little X on the cards to remove individual messages - if all messages have been removed by a user, then the dashboard should disappear (as shown in the working prototype)

# Needs to be a container for the homepage dashboard that can hold multiple cards
 # Each card needs to have its own rules/logic and be a stand-alone activity that is inserted into the carousel as a different Adobe Target activity
 # If a user has no cards available for him/her then the container should not show
 # if multiple cards are shown, then the cards should be scrollable sideways
 # needs to include the greeting and first name (if user is signed in)
 # Needs to work on Homepage, DLP, PLP, PDP
 # NEW: little X on the cards to remove individual messages - if all messages have been removed by a user, then the dashboard should disappear (as shown in the working prototype)



# Needs to be a container for the homepage dashboard that can hold multiple cards
 # Each card needs to have its own rules/logic and be a stand-alone activity that is inserted into the carousel as a different Adobe Target activity
 # If a user has no cards available for him/her then the container should not show
 # if multiple cards are shown, then the cards should be scrollable sideways
 # needs to include the greeting and first name (if user is signed in)
 # Needs to work on Homepage, DLP, PLP, PDP
 # NEW: little X on the cards to remove individual messages - if all messages have been removed by a user, then the dashboard should disappear (as shown in the working prototype)
 # NEW: track every interaction (seen, closing, swiping, clicking) - unless there are any disadvantages in doing so
 
 
 create a new Target activity for CardX
It should use a JSON offer containing relevant card details
the carousel should find this offer in the page/DOM and create a card for it
if the JSON offer doesn't give appropriate output use custom code to output the JSON (JSON offer would be more maintainable)
 
And to get them both showing at the same time you can:

Put first activity live behind a URL parameter (add audience rule to include a specific URL parameter - search for "martech_debug")
Then on the 2nd activity toggle the option for "show default content" in preview link settings
Set the audience targetting to a non-public page to be safe
Then you can see both.  Please run through this with one of us to get these steps setup correctly.

