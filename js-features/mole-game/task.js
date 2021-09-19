let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) { //Используя цикл зарегистрируйте для каждой лунки обработчик событий
   function getHole (index) {
let holeClick = document.getElementById(`hole${index}`);
   return holeClick;
}
let hole = getHole (index);
   hole.onclick = function() {
 if (hole.className.includes("hole_has-mole") === true) {
   dead++; //увеличиваем значение каждого счетчика
} else {
   lost++;
} if (dead.textContent === 10) {
alert ("Вы победили!");
dead = 0;
lost = 0;
} else if (lost.textContent === 5) {
 alert ("Вы проиграли");
dead = 0;
lost = 0;
}
}
}

