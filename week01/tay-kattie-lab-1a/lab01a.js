document.images[0].src="cat.jpg";

var browserInUse = navigator.userAgent;
if (browserInUse.indexOf("Firefox") != -1) {
	alert("What does the fox say?");
} else if (browserInUse.indexOf("Chrome") != -1) {
	alert("Does Google really do any evil?");
} else if (browserInUse.indexOf("MSIE") != -1) {
	alert("What is Bill Gates' net worth?");
} else {
	alert(navigator.appName);
}