$(document).ready(function() {

	// liteAccordion
	$('#liteAccordion').liteAccordion({
		autoPlay: true,
		pauseOnHover: true,
		rounded: true,
		scaleImages: true
	});

	// Stylesheet switch
	$.stylesheetInit();

	$('.styleswitch').bind(
		'click',
		function(e)
		{
			$.stylesheetSwitch(this.getAttribute('rel'));
			return false;
		}
	);

	// Date picker
	$('#popupDatepicker').datepick({
		showTrigger:
		'<img src="images/calendar-blue.gif" alt="Popup" class="trigger">',

		onSelect: function(dates) {
			var minDate = dates[0];
			for (var i = 1; i < dates.length; i++) {
				if (dates[i].getTime() < minDate.getTime()) {
					minDate = dates[i];
				}
			}

			$.getJSON('json/games.json', function(data) {
				var game="";

				for (var i in data.games) {
					if (data.games[i].date == $.datepick.formatDate(minDate)) {
						game = "<table><thead><tr><th>Date</th><th>Visiting Team</th><th>Home Team</th><th>Time</th></tr></thead>";
						game = game + "<tbody><tr>";
						game = game + "<td>" + data.games[i].date + "</td>";
						game = game + "<td>" + data.games[i].visiting + "</td>";
						game = game + "<td>" + data.games[i].home + "</td>";
						game = game + "<td>" + data.games[i].time + "</td>";
						game = game + "</tr></tbody></table>";
						//game = data.games[i].visiting + " VS. " + data.games[i].home;
						break;
					}
					else {
						game = "No games on this day!";
					}
				}

				document.getElementById("game").innerHTML=game;
			})
		}
	});

});
