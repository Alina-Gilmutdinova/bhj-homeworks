//Необходимо написать всплывающую подсказку для элементов. Подсказка появляется после клика на элементе
let tooltip = document.querySelectorAll(".has-tooltip");//здесь хранится текст плавающих подсказок
let body = document.getElementsByTagName("body");//подписываемся на весь тег body
let div = document.createElement("div");//создаем новый элемент div cо значением div
div.classList.add("tooltip");//добавляем вновь созданный элемент в список подсказок
let prevTop;
let prevLeft;


for (let tip of tooltip) {//создаем новый элемент tip
    let textTip = tip.getAttribute("title");//элемент в котором хранится текст подсказки
    tip.onclick = () => {//при нажатии кнопки (текста) появится текст подсказки
      let coordinats = tip.getBoundingClientRect();//getBoundingClientRect-возвращает размер элемента и его позицию относительно viewport
      let top = coordinats.bottom + 2;
      let left = Math.floor(coordinats.left);
   if (prevTop && top === prevTop && left === prevLeft) {
         div.classList.toggle("tooltip_active");
         return false;
        };
        prevTop = top;
        prevLeft = left;
        div.textContent = textTip;
        div.setAttribute("style", `left:${left}px;  top:${top}px;`);
        div.classList.add("tooltip_active");//подсказки становятся активными
        document.body.append(div);//Чтобы div появился, нам нужно вставить его где-нибудь в document
        return false;
    };
}