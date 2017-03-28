
var skillSet = ["Very Experienced", "A Little Experience", "Refresh My Memory", "I've heard of the language?", "Nope, no experience"];//options for the slider
$("#rangeVal").on("input", function(){$("#skillDisplay").empty();//display options beneath the slider
	$("#skillDisplay").append(skillSet[$("#rangeVal").val() - 1]);});

$( document ).ready(function() {//red when not valid, green when valid
	$( '#emailAdd' ).keyup(function(){
		var $currentEmail = $('#emailAdd').val();
		if(isEmail($currentEmail)){
			$( '#emailAdd' ).css('color', 'green');
		}else{
			$( '#emailAdd' ).css('color', 'red');
		}
	});
});

$( document ).ready(function() {
	$( '#regBtn' ).click(function(){
		validateForm();
	});
});

function validateForm(){
	var $first = $( '#fname' ).val();//get values
	var $second = $( '#sname' ).val();
	var $email = $( '#emailAdd' ).val();
	var $passFirst = $( '#initPass' ).val();
	var $level = $( '#rangeVal' ).val();
	var $passSecond = $( '#sPass' ).val();
	var $DOB = $( '#bday' ).val();
	var $gender = getGender();

	if(nameCheck($first) === false){
		$("#regHelp").empty();
        $("#regHelp").append("Please enter a valid first name!");//validate the values
        $("#regModal").modal("toggle");
		return false;
	}
	if(nameCheck($second) === false){
		$("#regHelp").empty();
        $("#regHelp").append("Please enter a valid second name!");
        $("#regModal").modal("toggle");
		return false;
	}
	if(isEmail($email) === false){
		$("#regHelp").empty();
        $("#regHelp").append("Please enter a valid email address!");
        $("#regModal").modal("toggle");
		return false;
	}
	if($passFirst !== $passSecond){
		$("#regHelp").empty();
        $("#regHelp").append("Please ensure both passwords are matching!");
        $("#regModal").modal("toggle");
		return false;
	}
	if(checkDate($DOB) ===false){
		$("#regHelp").empty();
        $("#regHelp").append("Please enter a valid date of birth!");
        $("#regModal").modal("toggle");
		return false;
	}
	if(passwordVal($passFirst) === false){
        $("#regModal").modal("toggle");
        return false;
	}
		// based on http://stackoverflow.com/questions/35969139/nodejs-how-to-send-data-from-html-to-hapi
//create an object to hold the user data
userdata = new Object();
userdata.givenName = $first;
userdata.surname = $second;
userdata.username = $email;
userdata.email = $email;
userdata.password = $passFirst;
userdata.DOB = $DOB;
userdata.level = $level;//submit the values to the server
userdata.gender = $gender;

//post the user data to the appropriate route.
$.post("/regSubmit", userdata)
.done(function(data) {
               	// Check browser support
               	if(data == "N"){
               		$("#regHelp").empty();
               		$("#regHelp").append("There was an error! Please attempt to register again again!");//if denied for some reason let the user know
               		$("#regModal").modal("toggle");
               	}else if(data == "USED"){
               		$("#regHelp").empty();
               		$("#regHelp").append("This email has already been used! Please try again!");
               		$("#regModal").modal("toggle");
               	}else{
				// Check browser support
				if (typeof(Storage) !== "undefined") {//if all ok, store the token retrieved from the server
				    // Store
				    localStorage.setItem("jwt", data);
				    location.href = "main";
				} else {
					document.cookie = "jwt=" + data;
					location.href = "main";
				}
			}

		});

//prevent the form from submitting
return false;

}

function isEmail(email) {//email in valid form
	
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function checkDate(date){//dob in valid form
	if(date !== "" && date !== null && date !== " "){
		var regEx = /^\d{4}-\d{2}-\d{2}$/;
		return date.match(regEx);
	}else{
		return false;
	}
}
function getGender(){
	return $('#genderID').val();
}

function nameCheck(fname){
	if(fname !== null && fname !== " " && fname !== ""){//ensures not null
		var tester = /^[A-Za-z ]+$/.test(fname);
		return tester;
	}else{
		return false;
	}
}

function passwordVal(passCheck){
	$("#regHelp").empty();
	var splitter = passCheck.split("");
	var upperCase = false;
	var lowerCase = false;//check that theres an uppercase letter, lowercase, correct length, no non alpha values and a number
	var lengthBool = false;
	var nonAlpha = true;
	var number = false;
	for(var i = 0; i < splitter.length; i++){
		if(splitter[i] == splitter[i].toUpperCase()){
			upperCase = true;
		}
		if(splitter[i] == splitter[i].toLowerCase()){
			lowerCase = true;
		}
		if(!isNaN(splitter[i])){
			number = true;
		}

		var code = passCheck.charCodeAt(i);
		 if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      nonAlpha = false;
    }

	}
	if(splitter.length >= 8){
		lengthBool = true;
	}
	if(upperCase == true && lowerCase == true && lengthBool == true && nonAlpha == true && number == true){
		return true;
	}
	if(upperCase == false){
        $("#regHelp").append("Please ensure your password contains a capital letter! <br></br>");//alert the user
	}
	if(lowerCase == false){
        $("#regHelp").append("Please ensure your password contains a lower case letter!<br></br>");
	}
	if(lengthBool == false){
        $("#regHelp").append("Please ensure your password is at least 8 characters long!<br></br>");
	}
	if(nonAlpha == false){
        $("#regHelp").append("Please ensure your password does not contain a non alpha-numeric value!<br></br>");
	}
	if(number == false){
        $("#regHelp").append("Please ensure your password contains a number!<br></br>");
	}
	return false;


}



