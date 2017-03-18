$( document ).ready(function() {
	var $heading = $('<h1>Senior Honours</h1>');
	$heading.appendTo($("#titleHead"));
});

$( document ).ready(function() {
	$( '#modalChoice1' ).click(function(){
		pageData = new Object();
       if (typeof(Storage) !== "undefined") {
        pageData.data = localStorage.getItem("jwt");
    } else {
       pageData.data = getCookie("jwt");
   }
   pageData.page = "javaMain";
   $.post("/pageChange", pageData)
   .done(function(data) {
    location.href="javahome";
});

});
	$( '#modalChoice2' ).click(function(){
        alert("1");
        pageData = new Object();
       if (typeof(Storage) !== "undefined") {
        alert("2");
        pageData.data = localStorage.getItem("jwt");
    } else {

        alert("3");
       pageData.data = getCookie("jwt");
   }
   pageData.page = "jstext";
        alert("4");
   $.post("/pageChange", pageData)
   .done(function(data) {

        alert("5", data);
    location.href="jstext";
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
