function parseJSON(json){
	$('#informationArea').append("<h2>Tutorial " + json.tutorial + ": " + json.point + "  ||  " + json.topic + ": " + json.deeper +  "</h2>");
	$('#informationArea').append("<p>" + json.levels.level[2].diff + ": " + json.deeper + "</p>");
}

$(document).ready(function(){

	$.getJSON( "text1-1", function( json ) {
		parseJSON(json);
	});
	
});