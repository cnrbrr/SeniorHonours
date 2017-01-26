$( document ).ready(function() {
	var $textInput = $('<input type="text" style="width: 30%"id="fname" placeholder="Please Enter your first name here">');
	$textInput.appendTo($('#text1'));
	$textInput = $('<input type="text" style="width: 30%"id="sname" placeholder="Please Enter your last name here">');
	$textInput.appendTo($('#text2'));
	var $textInput3 = $('<input type="text" style="width: 30%"id="emailAdd" placeholder="Please Enter your email here">');
	$textInput3.appendTo($('#text3'));
	var $textInput4 = $('<input type="password" style="width: 30%"id="initPass" placeholder="Please Enter your password here">');
	$textInput4.appendTo($('#pass1'));
	var $textInput5 = $('<input type="password" style="width: 30%"id="sname" placeholder="Please repeat your password">');
	$textInput5.appendTo($('#pass2'));
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

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
