
const clicker__cookie = document.getElementById("clicker__counter"); // нашли счетчик
clicker__cookie.textContent = "0";  //?? не понятно зачем нужен textContent и что записывать после =

const cookie = document.getElementById("cookie"); //подписалась на печеньку
cookie.onclick = function() {
   clicker__cookie += 1; //увеличиваем значение счетчика на 1 при клике
};



cookieSize();
function cookieSize() { //изменяем размер печеньки
   const image = document.getElementById("cookie");
   if (cookie.onclick % 2) { //если нажатие четное количество раз
      image.width = 300; //увеличиваем картинку
   } else {
      image.width = 200; //уменьшаем
   }
}
