function start() {
	//По нажатию на кнопку наш таймер начнет работать:
	window.setInterval(timer, 50);
}

//Эта функция будет запускаться каждую секунду
function timer() {
	var elem = document.getElementById('test');
    elem.value = parseInt(elem.value)-1; //parseInt преобразует строку в число
}