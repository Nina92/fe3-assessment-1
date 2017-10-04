// source: https://bl.ocks.org/mbostock/2368837

// hier worden de variabelen "margin", "width" en "height" aangemaakt en hier worden waarden aan toegwezen
// dit zijn de afmetingen en margins van het canvas
var margin = {top: 20, right: 30, bottom: 40, left: 30},
    width = 800 - margin.left - margin.right,
    height = 29500 - margin.top - margin.bottom;

// hier wordt de variabele "x" aangemaakt en hier wordt een waarde aan toegwezen
// dit is de de x-as
var x = d3.scale.linear()
    .range([0, width]);

// hier wordt de variabele "y" aangemaakt en hier wordt een waarde aan toegwezen
// dit is de de y-as
var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], 0.3);

// hier wordt de variabele "xAxis" aangemaakt en hier wordt een waarde aan toegwezen
// dit is de schaal van de x-as
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom"); // positie van ticks t.o.v. de as

// hier wordt de variabele "yAxis" aangemaakt en hier wordt een waarde aan toegwezen
// dit is de schaal van de y-as
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left") // positie van ticks t.o.v. de as
    .tickSize(0)
    .tickPadding(6);

// hier wordt de variabele "svg" aangemaakt en hier wordt een waarde aan toegewezen
// dit is het SVG element
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// hier wordt het csv bestand "temperature.csv" ingeladen
d3.csv("temperature.csv", type, function(error, data) {
  x.domain(d3.extent(data, function(d) { return d.temp; })).nice(); // .nice = getallen afronden
  y.domain(data.map(function(d) { return d.date; }));

// hier worden binnen het element "svg" alle child elementen met de class "bar" geselecteerd
// vervolgens wordt hier de data aan gekoppeld
// vervolgens wordt deze data gekoppeld aan de "rect" elementen (de bars)
// hier worden attributen aan toegevoegd
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) { return "bar bar--" + (d.temp < 0 ? "negative" : "positive"); })
      .attr("x", function(d) { return x(Math.min(0, d.temp)); })
      .attr("y", function(d) { return y(d.date); })
      .attr("width", function(d) { return Math.abs(x(d.temp) - x(0)); })
      .attr("height", y.rangeBand()); // height van bars

// hier wordt het element "g" als een child toegevoegd aan het element "svg"
// hier worden vervolgens attributen aan toegevoegd
// vervolgens wordt de functie "xAxis" aangeroepen die de x-as genereert op basis van de schaal
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text") // hier wordt het element "text" toegevoegd
      .attr("fill", "#000")
      .attr("y", 25)
      .attr("x", 72)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .attr("style", "font-weight:bold")
      .text("temperature (℃)"); // label x-as

// hier wordt het element "g" als een child toegevoegd aan het element "svg"
// hier worden vervolgens attributen aan toegevoegd
// vervolgens wordt de functie "yAxis" aangeroepen die de x-as genereert op basis van de schaal
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + x(0) + ",0)")
      .call(yAxis)
    .append("text") // hier wordt het element "text" toegevoegd
      .attr("fill", "#000")
      .attr("y", 2)
      .attr("x", -7)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .attr("style", "font-weight:bold")
      .text("date (YYYMMDD)"); // label y-as
});

function type(d) {
  d.temp = +d.temp;
  return d;
}