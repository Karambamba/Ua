function start() {
	window.setInterval(timer, 50);
}

function timer() {
	var elem = document.getElementById('test');
    elem.value = parseInt(elem.value)-1;
}
