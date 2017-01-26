

$( document ).ready(function() {
	var $heading = $('<h1>Senior Honours</h1>');
	$heading.appendTo($("#titleHead"));
	var $input1 = $('<input type="button" class="btn btn-primary text-center" value="login" id="logButton"/>');
    $input1.appendTo($("#btn1"));
    var $input2 = $('<input type="button" class="btn btn-primary text-center" value="register" id="regButton"/>');
    $input2.appendTo($("#btn2"));
});

$( document ).ready(function() {
$( "#regButton" ).click(function(){
	location.href = "register.html";
});
});

$( document ).ready(function() {
$( "#logButton" ).click(function(){

alert("h");
});
});