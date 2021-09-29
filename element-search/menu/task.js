let classLinks = document.querySelectorAll(".menu__link");//обращаемся как в сss
let countClick = 0;

for (let classLink of classLinks) {
   classLink.onclick = function () {
      countClick++;
let classLinkParent = classLink.closest("li");//ищем родителя у такого элемента через li

let menuSub = classLinkParent.querySelector(".menu_item > .menu_sub");//показываем вложенность элементов чтобы добавить класс
