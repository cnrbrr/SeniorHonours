$( document ).ready(function() {
	var $heading = $('<h1>Senior Honours</h1>');
	$heading.appendTo($("#titleHead"));
});

$( document ).ready(function() {
	$( '#modalChoice1' ).click(function(){
		location.href = "javahome";
	});
	$( '#modalChoice2' ).click(function(){
		location.href = "jstext";
	});
});
