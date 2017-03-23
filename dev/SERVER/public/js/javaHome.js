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
  // $.post("getResult", pageData)
  // .done(function(data) {
  // 	alert("GOT IT!");
  // 	pageData.result = data;
  // });
pageData.code = code;
$.post("/getValidate", pageData)
.done(function(data) {
	if(data == "Y"){
		alert("SUCCESS!");
      //code for moving onto next page
      location.reload();
  }else if(data == "Relog"){
  	$("#loginModal").modal("toggle");
  }else{
  	alert("PLEASE TRY AGAIN!");
  }
});
}

$( document ).ready(function() {
  $( "#modalLogin1" ).click(function(){
      //change to other screen where tasks will be
      var $email = $('#emailCheck').val();
      var $pass = $('#passCheck').val();
      if($email === null || $email === "" || $email === " "){
        alert("Please Enter a valid email address!");
        return;
      }
      if($pass === null || $pass === "" || $pass === " "){
        alert("Please Enter a valid password!");
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
      }else{
        // Check browser support
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("jwt", data);
          } else {
            document.cookie = "jwt=" + data;
          }
    }

  });
  });
});