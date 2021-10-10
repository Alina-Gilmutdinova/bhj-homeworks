//Необходимо реализовать механизм появления блоков в тот момент, когда прокрутка дойдёт до них
//реализовать прокрутку через метод addEventListener
const reveals = document.querySelectorAll(".reveal");

document.addEventListener('scroll', function() {
    for (let reveal of reveals) {
        if (reveal) {
            let top = reveal.getBoundingClientRect().top;//возвращает размер элемента и его позицию относительно viewport
            const view = window.innerHeight;//фиксируем высоту элемента относительно страницы
            if (top < view) reveal.classList.add("reveal_active");//если высота элемента меньше экр показываем элемент
            else reveal.classList.remove("reveal_active");//если нет скрываем
        }
    }
});
