//Необходимо реализовать механизм смены текстовых объявлений. Каждое объявление меняется через 1 секунду
let rotator = document.querySelectorAll(".rotator__case");
//меняющееся составляющее находится в классе rotator

function rotate() {
   for (let i = 0; i < rotator.length; i++) {//проходим по циклу
       if (rotator.item(i).classList.contains("rotator__case_active")) {//задать текстовый элемент активным, установите у него класс rotator__case_active
           let speed = rotator.item(i).getAttribute("data-speed");
           let color = rotator.item(i).getAttribute("data-color");
           let index = 0;
           rotator.item(i).style.color = color;
           setTimeout(() => {
               rotator.item(i).classList.remove("rotator__case_active");
               if (i + 1 < rotator.length) index = (i + 1);
               rotator.item(index).classList.add("rotator__case_active");
               rotate();
           }, speed);
       }
   }
}

rotate();