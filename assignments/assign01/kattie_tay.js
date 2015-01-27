window.onload = function() {
	var images = document.getElementsByTagName("img");

	for (var i=0; i<images.length; i++) {
		images[i].onclick = toggleImageBorder;
	}
}

function toggleImageBorder() {
	if (this.style.border == "5px solid red") {
		this.style.border = "";
	} else {
		this.style.border = "5px solid red";
	}
}

function isUserNameValid() {
	var username = document.getElementById("username");

	if (username.value == "") {
		username.focus();
		alert("Username is required");

		return false;
	}

	return true;
}

function isBirthYearValid() {
	var birthyear = document.getElementById("birthyear");

	if (isNaN(birthyear.value)) {
		birthyear.select();

		return false;
	} else if (birthyear.value < 1900 || birthyear.value > 2012) {
		document.getElementById("birthyear").style.backgroundColor = "yellow";

		return false;
	}

	return true;
}

function validateForm() {
	if (isUserNameValid() && isBirthYearValid()) {
		return true;
	}

	return false;
}