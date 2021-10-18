let OpenChat = document.querySelector(".chat-widget__side");
let input = document.getElementById("chat-widget__input");
const widget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
//создадим массив из случайных сообщений
let arr = ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 'Где ваша совесть?', 'дома', 'Напишите в чат позже', 'где?', 'Идите куда хотите', 'Добрый день!До свидания'];
//Для того, чтобы показать окно чата, достаточно поставить этому элементу класс chat-widget_active
let activeChat = function () {
    widget.classList.add("chat-widget_active");
}
//реализуем открытие чата по клику
OpenChat.addEventListener('click', activeChat);//открываем окно чата кликом
OpenChat.addEventListener('mousedown', activeChat);//нажимаем над окном чата

input.addEventListener('keypress', (event) => {//создаем событие которое вызывается при набирании текста
    if (event.code === "Enter" && input.value.length) {//По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
        let div = document.createElement("div");
        let text = document.createElement("div");
        let time = document.createElement("div");
        div.appendChild(time);
        div.appendChild(text);
        div.classList.add("message");
        div.classList.add("message_client");
        messages.appendChild(div);
        text.classList.add("message__text");
        time.classList.add("message__time");
        text.textContent = input.value;
        input.value = "";
        time.textContent = createDate();
        setTimeout(bot, 300);
    }
});
function createDate() {
    let date = new Date();
    return "" + formateDate(date.getHours()) + ":" + formateDate(date.getMinutes())
        + ":" + formateDate(date.getSeconds());
}
function formateDate(date) {
    if (date.length === 1) {
        return "0" + date.length;
    }
    return date;
}
function bot() {
    const answer = document.querySelector('.chat-widget__messages');
    let message = document.createElement("div");
    let time = document.createElement("div");
    let text = document.createElement("div");
    message.classList.add("message");
    message.classList.add("message__time");
    message.classList.add("message__text");
    answer.appendChild(message);
    message.appendChild(time);
    message.appendChild(text);
    time.textContent = createDate();
    text.textContent = arr[Math.floor(Math.random() * arr.length)];
}