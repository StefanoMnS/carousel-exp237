# Merged Requirements -  Exp 78,179,236,237,248


- Homepage dashboard container that holds multiple cards
- Cards can override default card styling, have its own classes, can be pass images, emojis, headings,
  footers, widths/heights as part of their default settings/behaviour using an array of key|value pair JS objects.   
- Each card can be set as a stand-alone activity. Copy paste code to the new activity and fill-out key
  value  pairs parameters with the new data. 
- Each card can very easily be updated.  Add more cards to an existing activity, delete existing data.

## Card rules

If a `user has no cards` available for him/her then the **container should not show**
if `multiple cards are shown`, then the cards should be **scrollable sideways**
It needs to `include greeting/first name` - (if user is **signed in**)

::
### NEW: little X on the cards to remove individual messages
 
 If all **messages** have been **removed by a user**, then the **dashboard should disappear** 
 (as shown in the working prototype) <-- not sure what this is !

::


## Targets

`Homepage`, `DLP`, `PLP`, `PDP`


## Functionality

Upper right `X` on the cards to **remove** individual messages - if all messages have been removed by a user, then the dashboard should disappear (as shown in the working prototype)
 
## Most recent updates 237     

1- create a `new Target activity` for **CardX**     
2- It should `use a JSON offer` containing relevant **card details**           
   
3- The `carousel should find` this **offer** in the page/DOM and `create a card` for it       

(If `JSON offer doesn't give` appropriate **output** use `custom code` to **output** the JSON (JSON offer would be more maintainable))      
 
4- And to get them both showing at the same time you can:          

- Put `first activity live behind a URL` parameter (add audience rule to include a specific URL parameter search for **"martech_debug"**)              
- Then on the `2nd activity` **toggle** the option for `"show default content"` in **preview link** settings
- Set the `audience targetting` to a **non-public page** to be safe
- `Then you can see both`.  **Please run through this with one of us** to get these steps setup correctly.


## Metrics

`Track every interaction` (seen, closing, swiping, clicking) - unless there are any disadvantages in doing so
Epic Link:Ladingpage Dashboard | Personalised Experiences  **?**




## Added Functionality

`Drag/touch` and `snap` to edges in **mobile**
`Last/First` cards in a row **bounces** as it reaches **viewport's edge**







## 179 related Variant: /78

Scenario1: Sparks offers are available - Basket reminder will be added as second button next to Sparks reminder
Scenario2: No Sparks offers - Basket reminder will show as only button in dashboard


***Trigger logic**

	We need to retest this with amended time trigger logic as a 50/50 A/B test
Control: either no dashboard or Spark Reminder (Exp78), if applicable 

Variant: 
 * Scenario1: Sparks offers are available - Basket reminder will be added as second button next to Sparks reminder
 * Scenario2: No Sparks offers - Basket reminder will show as only button in dashboard


Audience trigger:
	is (soft-)logged in
	has items in basket
	Days since last visit is less than 4 (i.e. 0-3 days)
	AND if Days since last visit = 0, THEN exclude hours 10AM - 2PM
	Control: either no dashboard or Spark Reminder (Exp78), if applicable 











 
 


