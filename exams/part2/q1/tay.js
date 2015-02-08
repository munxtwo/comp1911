window.onload = function() {
	document.forms[0].onsubmit = function() {
		elements = this.elements;
		var valid = true;

		for (var i=0; i<elements.length-1; i++) {

			var e = elements[i];
			var error = document.getElementById("error_" + e.name);
			error.style.color = "red";
			error.innerHTML = "";
			var isEmpty = false;

			if (e.className.indexOf("required") != -1) {
				if (e.value.length == 0) {
					error.innerHTML = e.name + " is required. ";
					valid = false;
					isEmpty = true;
				}
			}

			if (e.className.indexOf("username") != -1) {
				if (!isEmpty && (e.value.length < 5 || e.value.length > 10)) {
					error.innerHTML = error.innerHTML + "Must be 5 - 10 characters long. ";
					valid = false;
				}
			}

			if (e.className.indexOf("email") != -1) {
				if (!isEmpty && (e.value.indexOf("@") == -1 || e.value.indexOf(".") == -1)) {
					error.innerHTML = error.innerHTML + "Must have an @ sign and a period . "
					valid = false;
				}
			}

			if (e.className.indexOf("street") != -1) {
				if (e.value.length > 0 && isNaN(parseInt(e.value))) {
					error.innerHTML = error.innerHTML + "Must start with a number. "
					valid = false;
				}
			}

			if (e.className.indexOf("number") != -1) {
				if (!isEmpty && isNaN(e.value)) {
					error.innerHTML = error.innerHTML + "Must be numeric only. "
					valid = false;
				}
			}
		}

		return valid;
	}
}
