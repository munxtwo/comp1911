$(document).ready(function() {

	$('#liteAccordion').liteAccordion({
		autoPlay: true,
		pauseOnHover: true,
		rounded: true,
		scaleImages: true
	});

	$.stylesheetInit();

	$('.styleswitch').bind(
		'click',
		function(e)
		{
			$.stylesheetSwitch(this.getAttribute('rel'));
			return false;
		}
	);

});
