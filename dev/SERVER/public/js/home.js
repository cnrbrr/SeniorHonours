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
 $.post("/pageChange", pageData)
 .done(function(data) {
  if(data === "Y"){
    location.href="javahome";
  }else{
    location.href="home";
  }
});

});
	$( '#modalChoice2' ).click(function(){
    pageData = new Object();
    if (typeof(Storage) !== "undefined") {
      pageData.data = localStorage.getItem("jwt");
    } else {
     pageData.data = getCookie("jwt");
   }
   $.post("/pageChange", pageData)
   .done(function(data) {
    if(data === "Y"){
      location.href="jstext";
    }else{
      location.href="home";
    }
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


$( document ).ready(function() {
  pageData = new Object();
  if (typeof(Storage) !== "undefined") {
    pageData.data = localStorage.getItem("jwt");
  } else {
   pageData.data = getCookie("jwt");
 }
 $.post("/continueAccount", pageData)
 .done(function(data) {
  if(data !== "Y"){
    location.href="home";
  }
});
});