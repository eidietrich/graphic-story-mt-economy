# NOTES

Earlier memo to Derek
https://docs.google.com/document/d/13AwEmEg42WZi4ax9YdoAIGs0T4utwPBsVirhsvN_ECk/edit

Text from GDoc
Currently: https://docs.google.com/document/d/1M0D0dZWYzxAqlbRyN22F7VKfh34ysDw92moheoSEhR4/edit

DATA SOURCES
- State employment data (available through 2017) - SA25N (for 2017, via download and spreadsheet cleaning)
- Local area employment data - CA25N (historical, via API)
- Income data (lookup table code)

## TODO:  

### Individual graphic polishing

--> Graphic 5 is 'How the wages compare'
--> Graphic 6 is 'And the other pieces of income'. Point out that investments & transfers are also a thing, and that rural areas make up some of their income doing that.



### Writing

### Production
- Add pym.js code to ai2html code block so individual graphics export as complete packages ready for a standalone embed
- Set by-graphic max-width to help with visual dominance order
- Export final graphics as static print/png versions

### Stretch goals
- Mock up a scrollytelling version of the graphic to at least show Derek
- Interactive version of economy overview for desktop display - pre-render as much as possible, figure out how to set up code to call interactive with static fallback if necessary
- 'Find-a-county' interactive --> As observable notebook

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
    --> Simplify county geometry to cut down on loading size
    --> Clarify data is from 2016
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
https://www.washingtonpost.com/graphics/2018/politics/voter-turnout/?noredirect=on&utm_term=.6a1eaa95f64d
RE storytelling level of detail --> good mix of complex and less complex graphics

CMS CONSTRAINTS
- Need to produce feature image (it really wants to be dark background for the headline)
- single-column layout displays PYM embeds at 826px wide
- max width in one-column display is ~826 px --> going wider gets text columns too wide.


FEEDBACK:

Pat Barkey
Big-picture, he seems to see 'one-point-per-chart' as an ideal level of detail, tells me a bunch of these are too complicated.

RE 1 - Talks about BLS data vs BEA data (tells me BEA is better for this), points out formatting inconsitency on final graphic

RE 2 He doesn't get initially that the circles represent total jobs by county (this needs to be labeled better), nitpicks some of my geographic aggregation

RE 3 Talks about why NAICS broke "services" out into a bunch of different domains, bc it's so diverse
He doesn't like comparing 01 to 16, b/c 01 was a recession. Thinks 02 or 03 would be better.
He thinks colors are tricky to understand in this graph.

RE 4 Doesn't like SICS to NAICS comparison. Mentions that BLS has a consistent series pieced together back through 1990. E.g. it's iffy to compare Bakken to 1980s oil boom, b/c the jobs are counted differently.
(Also, I'm missing a recession on the chart here)

RE 5 - Sounds like he's skeptical people will be able to understand a bubble chart (look and see how other people have set up keys for plots like this -- could do something across the top, "<-> = avg pay, ^v = industry growth, .oO = industry employment"

RE 6: Thinks I could do this in a more straightforward way. Earning =/= wages, 1/3 of earnigns are non-wage labor income (e.g. busienss owners). "Property income" might be a better phrase than "investemnts" - Dividends, interest, rent also include royalties.

He would use an '03 comparison here.

Mentions that a lot of tech employment is in administrative support. Many MT companies, especially smaller ones, are outsourcing things like HR.

Chris Mehl
Mentions 'where jobs are' framing doesn't cover income
RE graphic 6: Headwaters often looks at "Big 3" - sends me a report.

TODO 10/24/18

Decision: Publish graphics as series of Pym.js embeds in MTFP article asset, writing text around them.
Make html files (suitable for BLOX HTML asset), instructions for embedding WRT MTFP, static .pngs, print pdfs available as final product. Stretch goal: Get Observable notebook suitable for public consumption.

Notes: Visuals are running at 1000px wide on MTFP site (with full-article width page view)

What's the featured image - needs to be some sort of graphic



By graphic:
1 - This needs to be simplified at first glance. Also really deserves to be interactive on desktop. Page alignment is off too - align via state boundaries, not text edge. Mobile lines are too thick.

2 - Need to clarify what the circles mean (could also go cutesy and replace circles with "peaks" or another symbol - waffle squares?)

3 - Simplify down to a single stacked bar chart, set to smaller max-width.

4 - Missing 2001 recession (plot recessions by month?). Truncate to post-2001 data for simplicity. Try four-across layout on desktop

5 - Need to polish labeling, include what circle size means. Eg: Earning =/= wages, 1/3 of earnigns are non-wage labor income (e.g. busienss owners). (What does Mehl mean by 'Big 3'?)

6 & 7 - need to be simplified (What's the takeway?)

Could also close with a 'look at a particular county' viz.

Text:



Have questions about the stories behind these trends? We do too -- and plan to dig into several of them as the Long Streets Project continues. We'd love to hear from you at staff@longstreetmt.com if you want to encourage us to look into something specific or if you have insight worth sharing. Sign up for our email newsletter if you want to follow along, too -- the next installment will discuss some of the things these numbers can't tell you.

[NEWSLETTER SUBSCRIBE BOX]

# Build processs, prepping for Pym distribution

Target: Directory of bundled .html files and assets ready to SFTP up to wordpress site for embedding via Pym

TODO - automate this

Use template.html in graphic-design folder to build a "preview" graphic
--> copy resulting .html to dist-indiv
--> copy graphics folder to dist-indiv/assets/graphics (should avoid need to change link paths)