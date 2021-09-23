const element = document.getElementById("cookie"); //подписалась на печеньку
const clicker = document.getElementById("clicker__counter"); // нашли счетчик
let count = 0;


element.onclick = function () {
   clicker.textContent = ++count;//увеличиваем значение счетчика 
   element.style.width = count % 2 === 0 ? '200px' : '300px'; //если четное кол-во кликов увелич,если нет уменьшаем
}
