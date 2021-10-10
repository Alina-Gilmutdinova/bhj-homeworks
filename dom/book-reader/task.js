//Необходимо доработать интерфейс онлайн-читалки электронных книг с возможностью смены размера шрифта
let book = document.getElementById("book");
let sizes = document.getElementsByClassName("font-size");
const activeSize = "font-size_active";
let element = document.querySelector(".font-size_active");//ставим элементу класс font-size_active

//book_fs-big класс для большего размера
//book_fs-small для меньшего
for (let size of sizes) {
    size.onclick = () => {//при нажатии кнопки текст должен уменьшаться и увелич
        if (size.getAttribute("data-size") === "small") {
            deleteClass();
            size.classList.add(activeSize);
            book.classList.remove("font-size_big");
            book.classList.add("font-size_small");
        } else if (size.getAttribute("data-size") === "big") {
            deleteClass();
            size.classList.add(activeSize);
            book.classList.remove("font-size_small");
            book.classList.add("font-size_big");
        } else { deleteClass();
            size.classList.add(activeSize);
            book.classList.remove("font-size_big");
            book.classList.remove("font-size_small");
        }
        return false;
    }
}

function deleteClass() {
    element.classList.remove("font-size_active");
}