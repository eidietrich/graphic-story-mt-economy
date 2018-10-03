# NOTES

TODO
* Fine-tune aspect ratio on scroller --> may be better to set up desktop side-by-side and mobile scroll over separately to allow for squarer aspect ratio

Specs:

Text from GDoc
Currently: https://docs.google.com/document/d/1GqHtiJSJdf6V0hhTZbukis9dL-6LdTS1CXrOQ5Qqk_Y/edit

Intro, outro, scroller

Structure:
Arbitrary number of steps, each with text and associated graphic and data to pass to the graphic (defined in GDOC)
- Steps scroll, shift focus
- With shift in focus, send info to graphic about current step (allows progessive display of tooltips, etc.)
- When a step with a different associated graphic comes into focus, shift to that graphic

Process: 
- Set up step --> graphic first (DONE!)

For each graphic:
- HTML
- CSS
- JS


Different behavior depending on mobile/desktop presentation --> e.g. hover events only on desktop

Refs:
https://www.bloomberg.com/graphics/2018-us-land-use/
--> Uses PNGs + ai2html labels. Different images for mobile/desktop
Mobile images 

PLAN here:
Mobile --> pngs w/ html labels
Desktop --> svg w/ interactivty handling