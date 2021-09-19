let cookie = document.getElementById("cookie"); //подписалась на печеньку
let clicker__cookie = 0; //начальное значение счетчика 0

function clickMe() {
   clicker__cookie += 1; //увеличиваем значение счетчика на 1 при клике
};

cookie.onclick = clickMe;