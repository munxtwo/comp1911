$(document).ready(function() {

	$.validator.addMethod("startsWithNumber", function(value, element) {

		return !isNaN(parseInt(value));
	}, "Please enter a valid street address.");

	$('#form').validate({
		rules: {
			street: {
				startsWithNumber: true
			}
		}
	});
})