# Assessment 1

## Description
For Assessment 1 of Frontend 3 I've made a basic visualisation from given data. 
I made a D3 bar chart based on [Mike Bostock's code for a Bar Chart with Negative Values](https://bl.ocks.org/mbostock/2368837) and I used the cleaned data from [knmi.nl](https://www.knmi.nl/kennis-en-datacentrum/achtergrond/gehomogeniseerde-reeks-maandtemperaturen-de-bilt) about monthly temperature time series.

## Background
First, I copied the HTML code from Mike Bostock's D3 Bar Chart with Negative Values code. Then I removed the internal CSS and JavaScript and placed them in external files. I downloaded de CSV file from GitHub and linked it to the JS file.

In the original code, the first column of the dataset was labeled _name_ and the second column was labeled _value_. The given dataset used the labels _date_ and _temp_. Therefore, in the JavaScript file I replaced the words _name_ (that refered to the label) with _date_ and I replaced the words _value_ (that refered to the label) with _temp_.

At first it looked like only the first row of the dataset was shown. I only saw the date and I saw no bars at all. After a little thinking and looking at the console I discovered that the reason the chart was like this was that the given height of the SVG element was way too small for a dataset with so many rows. So I changed that value so that all the bars were visible.

I gave the bars a bit more padding by increasing the rangeRoundBands of the y-axis from 0.1 to 0.3. I also tweaked the colors a bit so that the bars with negative values are blue  (cold temperature) and the bars with positive values are orange (warm temperature). I gave them both a darker shade when you hover on them.

I wanted labels for the axis that said _date (YYYYMMDD)_ for the y-axis and _temperature (℃)_ for the x-axis. [Mike Bostock's Line Chart](https://bl.ocks.org/mbostock/3883245) has a label for the y-axis. So I used that part of code to create my own labels and positioned them nicely.

At last I added comments in the JavaScript file in which I explain in Dutch what the code does.

## Features
* [d3.select](https://github.com/d3/d3-selection/blob/master/README.md#select) - select an element from the document
* [_selection_.attr](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr) - get or set an attribute
* [_selection_.append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append) - create, append and select new elements
* [d3.csv](https://github.com/d3/d3-request/blob/master/README.md#csv) - get a comma-separated values (CSV) file
* [_continuous_.domain](https://github.com/d3/d3-scale/blob/master/README.md#continuous_domain) - set the input domain
* [_nest_.map](https://github.com/d3/d3-collection/blob/master/README.md#nest_map) - generate the nest, returning a map
* [_selection_.call](https://github.com/d3/d3-selection/blob/master/README.md#selection_call) - call a function with this selection
* [_selection_.text](https://github.com/d3/d3-selection/blob/master/README.md#selection_text) - get or set the text content
* [_selection_.selectAll](https://github.com/d3/d3-selection/blob/master/README.md#selection_selectAll) - select multiple descendants for each selected element
* [_selection_.data](https://github.com/d3/d3-selection/blob/master/README.md#selection_data) - join elements to data
* [_selection_.enter](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter) - get the enter selection (data missing elements)
* [d3.scale.linear](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#linear) - construct a linear quantitative scale
* [linear.range](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#linear_range) - get or set the scale's output range
* [d3.scale.ordinal](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal) - construct an ordinal scale
* [ordinal.rangeRoundBands](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal_rangeRoundBands) - divide a continuous output range for discrete bands
* [d3.svg.axis](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis) - create a new axis generator
* [axis.scale](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#scale) - get or set the axis scale
* [axis.orient](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#orient) - get or set the axis orientation
* [axis.tickSize](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#tickSize) - specify the size of major, minor and end ticks
* [axis.tickPadding](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#tickPadding) - specify padding between ticks and tick labels
* [linear.nice](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#linear_nice) - extend the scale domain to nice round numbers
* [d3.extent](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent) - find the minimum and maximum value in an array

## License
Released under the [GNU General Public License, version 3](https://opensource.org/licenses/GPL-3.0).