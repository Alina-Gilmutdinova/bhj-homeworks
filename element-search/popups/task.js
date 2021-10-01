//Необходимо реализовать возможность открытия и закрытия всплывающих окон 
const element = document.getElementById("modal_main");//нашли окна
const modalSuccess = document.getElementById("modal_success");
const modalCloses = document.getElementsByClassName("modal__close_times");
const showSuccess = document.getElementsByClassName("show-success");

element.className += " modal_active";

for (let modalClose of modalCloses) {
	modalClose.onclick = function () {
		modalSuccess.className = "modal";
		element.className = "modal";
	}
}

for (let showSucces of showSuccess) {
	showSucces.onclick = function () {
		modalSuccess.className += " modal_active";
		element.className = "modal";
	}
}


