$(document).ready(function () {
	$('form').validate({

		highlight: function(element) {
			
			$(element).css("backgroundColor", "yellow");

			setTimeout(function() {
				$(element).css("backgroundColor", "white");
			}, 3000);
		}

	});
});