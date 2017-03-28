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


window.onload = function(){
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
			var level = 3;
			$.post("/getLevel", pageData)
			.done(function(lev) {
				if (typeof(Storage) !== "undefined") {
					localStorage.setItem("descLev", lev);
					localStorage.setItem("howLev", lev);
					localStorage.setItem("taskLev", lev);
				} else {
					document.cookie = "descLev=" + lev;
					document.cookie = "howLev=" + lev;
					document.cookie = "taskLev=" + lev;
				}
			});
			beginParse();
		}
	});
}

function parseJSON(json){
	$('#informationArea').append("<h3>Tutorial " + json.tutorial + ": " + json.point + "  ||  " + json.topic + ": " + json.deeper +  "</h3>");
	var descVal = "<p>";
	var howVal = "<p>";
	var taskVal = "<p>";
	var descLev = 3;
	var howLev = 3;
	var taskLev = 3;
	if (typeof(Storage) !== "undefined") {
		descLev = localStorage.getItem("descLev");
		howLev = localStorage.getItem("howLev");
		taskLev = localStorage.getItem("taskLev");
	} else {
		descLev = getCookie("descLev");
		howLev = getCookie("howLev");
		taskLev = getCookie("taskLev");
	}
	for (var i = 0; i < descLev; i++) {
		descVal += json.levels.level[i].description + " ";
	}
	for (var i = 0; i < howLev; i++) {
		howVal += json.levels.level[i].how + " ";
	}
	for (var i = 0; i < taskLev; i++) {
		taskVal += json.levels.level[i].task + " ";
	}
	$('#informationArea').append(descVal + "<button class='btn btn-default btn-sm' id='descBtn' onclick='descIncrease()'> <span class='glyphicon glyphicon-plus'></span> </button>" + "</p>");
	$('#informationArea').append(howVal + "<button class='btn btn-default btn-sm' id='howBtn' onclick='howIncrease()'> <span class='glyphicon glyphicon-plus'></span> </button>" + "</p>");
	$('#informationArea').append(taskVal + "<button class='btn btn-default btn-sm' id='taskBtn' onclick='taskIncrease()'> <span class='glyphicon glyphicon-plus'></span> </button>" + "</p>");
	$('#informationArea').append("<button class='btn btn-primary btn-lg text-center' id='subBtn' onclick='check()'>Submit!</button>");
}

function descIncrease(){
	$('#informationArea').empty();
	var descLev = 3;
	if (typeof(Storage) !== "undefined") {
		descLev = localStorage.getItem("descLev");
		descLev++;
		if(descLev > 5){
			descLev = 5;
		}
		localStorage.setItem("descLev", descLev);
	} else {
		descLev = getCookie("descLev");
		descLev++;
		if(descLev > 5){
			descLev = 5;
		}
		document.cookie = "descLev=" + lev;

	}
	beginParse();
}

function howIncrease(){
	$('#informationArea').empty();
	var howLev = 3;
	if (typeof(Storage) !== "undefined") {
		howLev = localStorage.getItem("howLev");
		howLev++;
		if(howLev > 5){
			howLev = 5;
		}
		localStorage.setItem("howLev", howLev);

	} else {
		howLev = getCookie("howLev");
		howLev++;
		if(howLev > 5){
			howLev = 5;
		}
		document.cookie = "howLev=" + howLev;

	}
	beginParse();
}

function taskIncrease(){
	$('#informationArea').empty();
	var taskLev = 3;
	if (typeof(Storage) !== "undefined") {
		taskLev = localStorage.getItem("taskLev");
		taskLev++;
		if(taskLev > 5){
			taskLev = 5;
		}
		localStorage.setItem("taskLev", taskLev);

	} else {
		taskLev = getCookie("taskLev");
		taskLev++;
		if(taskLev > 5){
			taskLev = 5;
		}
		document.cookie = "taskLev=" + taskLev;

	}
	beginParse();
}

function beginParse(){
	$.post("/getCurrentJSON", pageData)
	.done(function(jsonData) {
		$.getJSON( jsonData, function( json ) {
			parseJSON(json);//set the value to one above the value we want, if 0-4 in array 5 will do all not 4
		});
	});
}

function validate(code){
	pageData = new Object();
	if (typeof(Storage) !== "undefined") {
		pageData.data = localStorage.getItem("jwt");
	} else {
		pageData.data = getCookie("jwt");
	}
	pageData.code = code;
	$.post("/getValidate", pageData)
	.done(function(data) {
		if(data == "Y"){
			$("#infoTitle").empty();
			$("#infoTitle").append("Congratulations!");
			$("#infoHelp").empty();
			$("#infoHelp").append("You have completed this task! Are you ready to progress onto the next task?");
			$("#infoHelp").css('color', 'black');   
			$('#infoBtns').empty();
			$('#infoBtns').append("<button type='button'class='btn btn-success text-center' data-dismiss='modal' onclick='ontoNext()' id='modalInfo1'>Continue</button>");
			$("#infoModal").modal("toggle");
		}else if(data == "Relog"){
			$("#loginModal").modal();
		}else{
			$("#infoTitle").empty();
      $("#infoTitle").append("Try Again!");
			$("#infoHelp").empty();
			$("#infoHelp").append("Seems like something wasn't quite right! Keep going!");
			$("#infoHelp").css('color', 'red');
			$('#infoBtns').empty();
			$('#infoBtns').append("<button type='button' class='btn btn-success text-center' data-dismiss='modal' id='modalReg1'>Understood</button>");
			$("#infoModal").modal("toggle");
		}
	});
}

$( document ).ready(function() {
	$( "#modalLogin1" ).click(function(){
      //change to other screen where tasks will be
      var $email = $('#emailCheck').val();
      var $pass = $('#passCheck').val();
      if($email === null || $email === "" || $email === " "){
      	$("#infoTitle").empty();
      $("#infoTitle").append("Error!");
      	$("#infoHelp").empty();
      	$("#infoHelp").append("Please ensure you have entered a valid email address");
      	$("#infoHelp").css('color', 'red');
      	$('#infoBtns').empty();
      	$('#infoBtns').append("<button type='button' class='btn btn-success text-center' data-dismiss='modal' id='modalReg1'>Understood</button>");
      	$("#infoModal").modal("toggle");
      	return;
      }
      if($pass === null || $pass === "" || $pass === " "){
      	$("#infoTitle").empty();
      $("#infoTitle").append("Error!");
      	$("#infoHelp").empty();
      	$("#infoHelp").append("Please ensure you have entered a valid password");
      	$("#infoHelp").css('color', 'red');
      	$('#infoBtns').empty();
      	$('#infoBtns').append("<button type='button' class='btn btn-success text-center' data-dismiss='modal' id='modalReg1'>Understood</button>");
      	$("#infoModal").modal("toggle");
      	return;
      }

      
      userdata = new Object();
      userdata.email = $email;
      userdata.password = $pass;

    //post the user data to the appropriate route.
    $.post("/logSubmit", userdata)
    .done(function(data) {
    	if(data == "N"){
    		$("#logDetails").empty();
    		$("#logDetails").append("There was an error! Please login again!");
    		$("#logDetails").css('color', 'red');
    		$("#loginModal").modal("toggle");
    	}else{
        // Check browser support
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("jwt", data);
        } else {
        	document.cookie = "jwt=" + data;
        }
        $("#infoTitle").empty();
      	$("#infoTitle").append("All Good!");
        $("#infoHelp").empty();
        $("#infoHelp").append("Logged In!");
        $("#infoHelp").css('color', 'green');
        $('#infoBtns').empty();
        $('#infoBtns').append("<button type='button' class='btn btn-success text-center' data-dismiss='modal' id='modalReg1'>Understood</button>");
        $("#infoModal").modal("toggle");
    	}

	});
});
});

function ontoNext(){
	userData = new Object();
	if (typeof(Storage) !== "undefined") {
		userData.data = localStorage.getItem("jwt");
	} else {
		userData.data = getCookie("jwt");
	}
	$.post("/getNext", userData)
	.done(function(data) {
    if(data == "END"){//modal about congrats and more tutorials soon!
    	$("#endModal").modal("toggle");
    	return;
    }else if(data != "Y"){

    }else{
    	updateData = new Object();
    	if (typeof(Storage) !== "undefined") {
    		updateData.data = localStorage.getItem("jwt");
    		updateData.desc = localStorage.getItem("descLev");
    		updateData.how = localStorage.getItem("howLev");
    		updateData.task = localStorage.getItem("taskLev");
    	} else {
    		updateData.data = getCookie("jwt");
    		updateData.desc = getCookie("descLev");
    		updateData.how = getCookie("howLev");
    		updateData.task = getCookie("taskLev");
    	}
    	$.post("/updateLevel", updateData);
    	location.reload();
    }

});
}