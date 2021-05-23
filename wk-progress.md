# Work Progress

see keeptrack.md  [not pushing to public repository in this page]

- click event mobile problem
- new layout tablet/ 1280px
- Add card via JSOn offer or some other way if can't
  Have a live carousel activity at a certain url pick up this data and convert it into a carousel
  card.

 What about 219 appears sometime above it.  Eats away padding in landscape plus has a diff bg color

 Is that a new design/ layout

 I did not expected a new layout because he had never said anything in the past.  I remember even saying that I could use the existing mobile for desktop and back then he never said one is coming or something like that.

 Also the location of the container's changed.


 - Bring back animation
 -  Resize Observer
 - Create Mutation Observer

 - Refactor code / things too crowded

 -  Added fallbacks removed errors in out of exp



 ----

 - added fallbacks 
 - added cookie to check data/dashboard before continuing running script [pushed]
 - updating card implementation since we are going to be expecting cards that may need fetching
 - instead of removing items or carousel it should be just disabled

- resolved issues with mobile running two separate events
- timestamp values  in mobile to avoid double clicking
- removed clicked events and added touchstart in mobile



pass

i can pass user scrolled width left or right
how far left or how far right did he scrolled
whether user did used touch or drag events on card, or just click events card
whether he tried to use drag on desktop (even if disabled)
whether he tried to use scrolled on mobile (even if disabled)

how many times he scrolled left or right to end of viewport once he saw card bounced
(otherwise why would u go more than once?)