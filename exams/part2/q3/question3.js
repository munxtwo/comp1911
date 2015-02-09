window.onload = function() {
	var script = document.createElement('script');
	script.src = 'http://code.jquery.com/jquery-latest.js';
	script.type = 'text/javascript';

	var scripts = document.getElementsByTagName('script');
	document.getElementsByTagName("head")[0].insertBefore(script, scripts[0]);

	script.onload = function() {

		$('p.sports').css('border', 'solid green 2px');

		$('p.life').css('color', 'red');

		$('p.books').css('textAlign', 'right');

		$('p.comedy').css('fontSize', '200%');
	}
}

