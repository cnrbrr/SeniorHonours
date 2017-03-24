

$( document ).ready(function() {
	var $heading = $('<h1>SENIOR HONOURS</h1>');
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
				$("#infoHelp").empty();
				$("#infoHelp").append("Please ensure you have entered a valid email address");
				$("#infoHelp").css('color', 'red');
				$("#infoModal").modal("toggle");
				return;
			}
			if($pass === null || $pass === "" || $pass === " "){
				$("#infoHelp").empty();
				$("#infoHelp").append("Please ensure you have entered a valid password");
				$("#infoHelp").css('color', 'red');
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
				$("#logDetails").append("There was an error! Please ensure you have used the correct email and password!");
				$("#logDetails").css('color', 'red');
				$("#loginModal").modal("toggle");
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