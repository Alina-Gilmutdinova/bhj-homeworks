let timer; //объявили переменную
let x = 59; //стартовое значение обратного отсчета
countdown(); //вызов функции счетчик
function countdown() {  //функция обратного отсчета
   document.getElementById('timer').innerHTML = x;
   x--; //уменьшаем таймер на 1 единицу
   if (x < 0) {
      clearTimeout(timer); //таймер остановится на 0 и выведет сообщение
      alert("Вы победили в конкурсе!");
   } else {
      timer = setTimeout(countdown, 1000);
   }
}
