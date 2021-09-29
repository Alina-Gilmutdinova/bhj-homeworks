//Необходимо реализовать возможность открытия и закрытия всплывающих окон 
const element = document.getElementById("modal_main"); //нашли окна

const modalSuccess = document.getElementById("modal_success");//окна открытия
const modalCloses = document.getElementsByClassName("modal__close_times");//окна закрытия
const showSuccess = document.getElementsByClassName("show-success");
//Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
element.className += "modal_active";//Для того, чтобы окно было активно (показывалось на странице), добавьте ему класс modal_active
for (let modalClose of modalCloses) {
   modalClose.onclick = function () {
      modalSuccess.className = "modal";
      element.className = "modal";
   }
}

for (let showSuccesS of showSuccess) {
showSuccesS.onclick = function () {
   modalSuccess.className += "modal_active";
   element.className = "modal";
}
}


