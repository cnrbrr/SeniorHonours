$( document ).ready(function() {
	var $heading = $('<h1>Senior Honours</h1>');
	$heading.appendTo($("#titleHead"));
});

$( document ).ready(function() {
	$( '#modalChoice1' ).click(function(){
		alert("1");
		pageData = new Object();

		alert("2");
	if (typeof(Storage) !== "undefined") {
    // Store
    alert("3");
    pageData.data = localStorage.getItem("jwt");
    alert("4");
} else {
	pageData.data = getCookie("jwt");
}
alert("5", pageData);
pageData.page = "javaMain";
$.get("/pageChange", pageData)
               .done(function(data) {
alert("6", data);
});

	});
	$( '#modalChoice2' ).click(function(){
				pageData = new Object();

	if (typeof(Storage) !== "undefined") {
    // Store
    pageData.data = localStorage.getItem("jwt");
} else {
	pageData.data = getCookie("jwt");
}
pageData.page = "jsText";
$.get("/pageChange", userdata)
               .done(function(data) {

});
	});
});

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
