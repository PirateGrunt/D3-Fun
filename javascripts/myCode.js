var dataset = [ 5, 10, 15, 20, 25 ];

var dataset = [];    					 //Initialize empty array
			for (var i = 0; i < 25; i++) {			 //Loop 25 times
				var newNumber = Math.random() * 30;  //New random number (0-30)
				dataset = dataset.concat(newNumber); //Add new number to array
			}

//Width and height
var w = 500;
var h = 30;
var barPadding = 1;  

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
            
svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
     return i * (w / dataset.length);})
   .attr("y", function(d) {
     return h - d;  //Height minus data value
    })
   .attr("width", w / dataset.length - barPadding)
   .attr("height", function(d){
    return d;
   })
   .attr("fill", function(d){
    if (d > 15) {
      return "red"
    } else {
      return "teal"
    }
   });
   
/*d3.select("body").selectAll("p")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", function(d) {
		var barHeight = d * 5;
		return barHeight + "px";
	})
  .style("background-color", function(d){
    if (d > 15){
      return "red"
    } else {
      return "teal"
    }
    
  });*/