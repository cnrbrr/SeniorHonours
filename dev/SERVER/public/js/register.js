

// $( document ).ready(function() {
// 	var $textInput = $('<input type="text" style="width: 30%"id="fname" placeholder="Please Enter your first name here" class="form-control">');
// 	$textInput.appendTo($('#text1'));
// 	$textInput = $('<input type="text" style="width: 30%"id="sname" placeholder="Please Enter your last name here" class="form-control">');
// 	$textInput.appendTo($('#text2'));
// 	$textInput = $('<input type="text" style="width: 30%"id="emailAdd" placeholder="Please Enter your email here" class="form-control">');
// 	$textInput.appendTo($('#text3'));
// 	$textInput = $('<input type="password" style="width: 30%"id="initPass" placeholder="Please Enter your password here" class="form-control">');
// 	$textInput.appendTo($('#pass1'));
// 	$textInput = $('<input type="password" style="width: 30%"id="sPass" placeholder="Please repeat your password" class="form-control">');
// 	$textInput.appendTo($('#pass2'));
// });

$( document ).ready(function() {
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
		var $first = $( '#fname' ).val();
		var $second = $( '#sname' ).val();
		var $email = $( '#emailAdd' ).val();
		var $passFirst = $( '#initPass' ).val();
		var $level = $( '#rangeVal' ).val();
		var $passSecond = $( '#sPass' ).val();
		var $DOB = $( '#bday' ).val();
		var $gender = getGender();
		if(nameCheck($first) === false){
			alert("Please enter a valid first name!");
			return false;
		}
		if(nameCheck($second) === false){
			alert("Please enter a valid last name!");
			return false;
		}
		if(isEmail($email) === false){
			alert("Please enter a valid email address!");
			return false;
		}
		if($passFirst !== $passSecond){
			alert("Please ensure both passwords are matching!");
			return false;
		}
		if(checkDate($DOB) ===false){
			alert("Please enter a valid Date of Birth!");
			return false;
		}
		//from http://stackoverflow.com/questions/35969139/nodejs-how-to-send-data-from-html-to-hapi
//create an object to hold the user data
userdata = new Object();
userdata.givenName = $first;
userdata.surname = $second;
userdata.username = $email;
userdata.email = $email;
userdata.password = $passFirst;
userdata.DOB = $DOB;
userdata.level = $level;
userdata.gender = $gender;
                             
//post the user data to the appropriate route.
$.post("/regSubmit", userdata)
               .done(function(data) {
                 console.log("Done! " + data); // change for whatever callback you want
});
 
//prevent the form from submitting
return false;

}

function isEmail(email) {
	
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function checkDate(date){
	if(date !== "" && date !== null && date !== " "){
		var regEx = /^\d{4}-\d{2}-\d{2}$/;
  		return date.match(regEx);
	}else{
		return false;
	}
}
function getGender(){
	// var $male = $('input[name=optradio1]:checked').val();
	// var $female = $('input[name=optradio2]:checked').val();
	// var $other = $('input[name=optradio3]:checked').val();
	// if($male == "on"){
	// 	return 1;
	// }

	// if($female == "on"){
	// 	return 2;
	// }

	// if($other == "on"){
	// 	return 3;
	// }
	// if($male !== "on" && $female !== "on" && $other !== "on"){
	// 	return 4;
	// }
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



