//Необходимо разработать простейший текстовый редактор, который будет сохранять своё значение даже после перезагрузки страницы.

const editor = document.getElementById("editor");
const key = "editor_value";
const message = localStorage.getItem(key);

if (message) {
  editor.value = message;
}

window.addEventListener('beforeunload', (event) => {
    localStorage.setItem(key, editor.value);
});