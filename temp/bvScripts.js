$(document).ready(function() {
	showQuote();
	showTree();
});

function showQuote() {
	var o = 1.0;
	var elegant = setInterval(function() {
		if (o > 0) {
			o-= 0.1;
			$("#willHide").css("opacity",o);
		}
		else {
			clearInterval(elegant);
		}
	},100);

}
function showTree() {
var entries = [
	["10/10/2019","yes"]
	];
	//d3.select("#timeline").data(timelineEntries).enter().append("div").classed(
	//d3.select("#timeline").data(timelineEntries).enter().append("p").text(function(d) { return d[0] + " : " + d[1]; });
}







