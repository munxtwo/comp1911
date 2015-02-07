function move(image, numOfPxToMove) {
	image.style.left = parseInt(image.style.left) + numOfPxToMove + "px";
}

function stopAndReset(image, timer) {
	clearInterval(timer);
	image.style.left = "10px";

	return null;
}

function createInterval(func, image, numOfPxToMove, timerInterval) {
	return setInterval(function () {
		func(image, numOfPxToMove);
	}, timerInterval);
}

function clickToMove(image, timer, numOfPxToMove, timerInterval) {
	if (timer === null) {

		return createInterval(move, image, numOfPxToMove, timerInterval);
	} else {
		clearInterval(timer);

		return null;
	}
}

window.onload = function () {
	var catTimer = null;
	var dogTimer = null;
	var catImage, dogImage, button;

	if (document.getElementById) {
		catImage = document.getElementById("catImage");
		dogImage = document.getElementById("dogImage");
		button = document.getElementById("button");
	} else if (document.all) {
		catImage = document.all["catImage"];
		dogImage = document.all["dogImage"];
		button = document.all["button"];
	} else if (document.layers) {
		catImage = document.layers["catImage"];
		dogImage = document.layers["dogImage"];
		button = document.layers["button"];
	} else {
		alert("Sorry, your browser does not support this script.");
		return;
	}

	catImage.onclick = function () {
		catTimer = clickToMove(catImage, catTimer, 1, 100);
	}

	dogImage.onclick = function () {
		dogTimer = clickToMove(dogImage, dogTimer, 10, 2000);
	}

	button.onclick = function () {
		catTimer = stopAndReset(catImage, catTimer);
		dogTimer = stopAndReset(dogImage, dogTimer);
	}
}
