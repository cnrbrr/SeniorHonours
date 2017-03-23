

$( document ).ready(function() {
	var $heading = $('<h1>Senior Honours</h1>');
	$heading.appendTo($("#titleHead"));
	var $input1 = $('<input type="button" class="btn btn-primary text-center" value="login" id="logButton" data-toggle="modal" data-target="#loginModal"/>');
	$input1.appendTo($("#btn1"));
	var $input2 = $('<input type="button" class="btn btn-primary text-center" value="register" id="regButton"/>');
	$input2.appendTo($("#btn2"));
});

$( document ).ready(function() {
	$( "#regButton" ).click(function(){

		location.href = "register";
	});
});

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
				    location.href = "main";
				} else {
					document.cookie = "jwt=" + data;
					location.href = "main";
				}
			}

});
	});
});

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) != null;
}