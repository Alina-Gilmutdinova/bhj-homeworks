let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let deadCount = 0; //число убитых
let lostCount = 0; //число промахов

for (let i = 1; i < 9; i++) { //Используя цикл зарегистрируйте для каждой лунки обработчик событий
const hole = document.getElementById("hole" + i);
hole.onclick = function () {
   if (getHole(i).className === "hole hole_has-mole") {
      deadCount++;
      dead.textContent = deadCount;
   if (deadCount === 9) { //условие выигрыша
      gameOver("Победа!");
   }
   } else { //условие проигрыша
      lostCount++;
      lost.textContent = lostCount;
      if (lostCount === 5) {
         gameOver("Проигрыш!");
      }
   }
}
}

function getHole(index) {
   return document.getElementById (`hole${index}`);
}

function gameOver(text) {
   alert(text);
   deadCount = 0;
   lostCount = 0;
   location.reload();
}