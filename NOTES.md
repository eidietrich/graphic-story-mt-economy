# NOTES

Earlier memo to Derek
https://docs.google.com/document/d/13AwEmEg42WZi4ax9YdoAIGs0T4utwPBsVirhsvN_ECk/edit

Text from GDoc
Currently: https://docs.google.com/document/d/1M0D0dZWYzxAqlbRyN22F7VKfh34ysDw92moheoSEhR4/edit

DATA SOURCES
- State employment data (available through 2017) - SA25N (for 2017, via download and spreadsheet cleaning)
- Local area employment data - 25N (historical, via API)
- Income data (lookup table code)

TODO
- Fine-tune other graphs
- Build sector key/explanation
- Add in employment-over-time line charts for specific sectors?
- organize graphics --> use layers to fine-tune text styling in project CSS
- Figure out deployment strategy --> embed on web as monolithic asset
- Export graphics as static pngs (600px wide at 2x resolution) for easier republication
- Add in chart-headers
- Build 'pick-a-county' interactive --> design so papers can create their own visuals?  
- Write nerd box --> figure out what to include/cite


GRAPHIC-LEVEL TODO
- overview 
    -->
- by-region
    --> Add size key (no numbers on graph currently)
    --> Are circles and waffles too visually distinct?
    --> Some waffle plots have sizing issues (e.g. Billings)
- by-region-change
    --> desktop on-hover: Add bar labels and figures
    --> Desktop 'rural Plains' missing 0 line' --> standardize
- by-sector-change
    --> Indicate what circle size means somehow
- non-wage-income
    --> 

STRETCH TODO
- Different behavior depending on mobile/desktop presentation --> e.g. hover events only on desktop

PRODUCTS:
- Responsive/light interactive web presentation
- Static images + text web presentation
- Print version of graphics at least, possibly designed page


Refs:
https://www.bloomberg.com/graphics/2018-us-land-use/
--> Uses PNGs + ai2html labels. Different images for mobile/desktop
Mobile images 

