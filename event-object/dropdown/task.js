//Необходимо создать управление кнопкой с прикреплённым к ней выпадающим списком
let classLink = document.querySelectorAll(".dropdown__link");//находим все ссылки на меню
let choices = document.querySelector(".dropdown__value");//в этом элементе хранится выбранный элемент из выпадающего списка
let downList = document.querySelector(".dropdown__list");//находим сам выпадающий список(общий)


//далее создаем функцию раскрывающегося меню,сворачивание/разворачивание списка по нажатию на кнопку
choices.onclick = () => { //при кликании по списку, должно выпадать меню
   if (downList.classList.contains("dropdown__list_active")) {
      downList.classList.remove("dropdown__list_active");
      return;
   }
   downList.classList.add("dropdown__list_active");
}

//реализуем закрытие списка и замену элемента с классом dropdown__value
for (link of classLink) {
   let button = link.closest(".dropdown__item").querySelector(".dropdown__link");
   button.onclick = () => {
       downList.classList.remove("dropdown__list_active");
       choices.textContent = button.textContent;
       return false;
   }
}