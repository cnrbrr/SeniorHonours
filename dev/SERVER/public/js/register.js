

$( document ).ready(function() {
	var $textInput = $('<input type="text" style="width: 30%"id="fname" placeholder="Please Enter your first name here">');
	$textInput.appendTo($('#text1'));
	$textInput = $('<input type="text" style="width: 30%"id="sname" placeholder="Please Enter your last name here">');
	$textInput.appendTo($('#text2'));
	$textInput = $('<input type="text" style="width: 30%"id="emailAdd" placeholder="Please Enter your email here">');
	$textInput.appendTo($('#text3'));
	$textInput = $('<input type="password" style="width: 30%"id="initPass" placeholder="Please Enter your password here">');
	$textInput.appendTo($('#pass1'));
	$textInput = $('<input type="password" style="width: 30%"id="sPass" placeholder="Please repeat your password">');
	$textInput.appendTo($('#pass2'));
	var $input1 = $('<input type="button" class="btn btn-primary text-center" value="Register" id="regBtn"/>');
    $input1.appendTo($("#btnSub"));
});

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
			return;
		}
		if(nameCheck($second) === false){
			alert("Please enter a valid last name!");
			return;
		}
		if(isEmail($email) === false){
			alert("Please enter a valid email address!");
			return;
		}
		if($passFirst !== $passSecond){
			alert("Please ensure both passwords are matching!");
			return;
		}
		if(checkDate($DOB) ===false){
			alert("Please enter a valid Date of Birth!");
			return;
		}
		if($gender === 4){
			alert("Please select your gender");
			return;
		}
		alert("HERE");
		addUser($first, $second, $email, $passFirst, $level, $DOB, $gender);
		alert("DONE");
	});
});

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
	var $male = $('input[name=optradio1]:checked').val();
	var $female = $('input[name=optradio2]:checked').val();
	var $other = $('input[name=optradio3]:checked').val();
	if($male == "on"){
		return 1;
	}

	if($female == "on"){
		return 2;
	}

	if($other == "on"){
		return 3;
	}
	if($male !== "on" && $female !== "on" && $other !== "on"){
		return 4;
	}
}

function nameCheck(fname){
	if(fname !== null && fname !== " " && fname !== ""){//ensures not null
		var tester = /^[A-Za-z ]+$/.test(fname);
		return tester;
	}else{
		return false;
	}
}


