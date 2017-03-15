function parseJSON(json, levelVal){
	$('#informationArea').append("<h2>Tutorial " + json.tutorial + ": " + json.point + "  ||  " + json.topic + ": " + json.deeper +  "</h2>");
	var descVal = "<p>";
	var howVal = "<p>";
	var taskVal = "<p>";
	for (var i = 0; i < levelVal; i++) {
		descVal += json.levels.level[i].description + " ";
		howVal += json.levels.level[i].how + " ";
		taskVal += json.levels.level[i].task + " ";
	};
	$('#informationArea').append(descVal + "</p>");
	$('#informationArea').append(howVal + "</p>");
	$('#informationArea').append(taskVal + "</p>");
}

$(document).ready(function(){

	$.getJSON( "text1-2", function( json ) {
		parseJSON(json,5);//set the value to one above the value we want, if 0-4 in array 5 will do all not 4
	});
	
});