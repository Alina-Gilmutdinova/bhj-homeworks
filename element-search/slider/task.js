//Необходимо реализовать слайдер изображений с бесконечной сменой слайдов
//Установите обработчики события click
const prev = document.querySelector(".slider__arrow_prev");
const ridht = document.querySelector(".slider__arrow_next");
const slider = document.querySelectorAll(".slider__item");
const dot = document.querySelectorAll(".slider__dot");
let i = 0; 

const activeSlide = n => {
	for (slide of slider) {
		slide.classList.remove("slider__item_active");//слайдер не активный
	}
	slider[n].classList.add("slider__item_active");//добавляем класс slider__item_active чтобы слайдер был активным
}

const getCurrentSlide = function (idx) {
	activeSlide(idx);
	dotActive(idx);
}

const nextSlide = function () {
	if (i === slider.length - 1) {
		i = 0;
		getCurrentSlide(i);
	} else {
		i++;
		getCurrentSlide(i);
	}
}

const prevSlide = function () {
	if (i === 0) {
		i = slider.length - 1;
		getCurrentSlide(i);
	} else {
		i--;
		getCurrentSlide(i);
	}
}


//Установите обработчики события click
ridht.onclick = function () {
	nextSlide();
	return false;
}

prev.onclick = function () {
	prevSlide();
	return false;
}



