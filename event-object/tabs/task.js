let linkS = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".tab__content");

//Для того, чтобы вкладка была выбранной, у элемента с классом tab должен быть класс tab_active:
function activeElement (i) {
   for (let link of linkS) {
      link.classList.remove("tab_active");//удаляем
   }
   linkS[i].classList.add("tab_active");//добавляем
}

//Для того, чтобы показывалось верное содержимое, у элемента с классом tab__content должен быть класс tab__content_active
function activeContent(i) {
   for(let contents of content) {
      contents.classList.remove("tab__content_active");
   }
   content[i].classList.add("tab__content_active")
}

//зарегистрируем обработчик события
//найдем индекс события
linkS.forEach((item, ind) => {
   item.onclick = () => {
      activeElement(ind);
      activeContent(ind);
   }
})

