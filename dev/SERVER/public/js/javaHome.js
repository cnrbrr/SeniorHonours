function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


$( document ).ready(function() {
	pageData = new Object();
	if (typeof(Storage) !== "undefined") {
		pageData.data = localStorage.getItem("jwt");
	} else {
		pageData.data = getCookie("jwt");
	}
	$.post("/continueAccount", pageData)
	.done(function(data) {
		if(data !== "Y"){
			location.href="home";
		}else{
			$.post("/getCurrentJSON", pageData)
			.done(function(jsonData) {
				$.getJSON( jsonData, function( json ) {
					parseJSON(json,1);//set the value to one above the value we want, if 0-4 in array 5 will do all not 4
				});
			});
		}
	});
});

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

