//Необходимо разработать систему опросов с выбором ответа
const url = "https://netology-slow-rest.herokuapp.com/poll.php";
const question = document.getElementById("poll__title");
const answer = document.getElementById("poll__answers");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("close-button");

let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.onload = () => {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        let answers = response.data.answers;
        question.textContent = response.data.title;
        for (let item in answers) {
            let btn = document.createElement("button");
            btn.setAttribute("style", "margin: 6px;");
            btn.textContent = answers[item];
            answer.appendChild(btn);
            btn.onclick = () => {
                modal.classList.add("modal_active");
            }
        }
    }
}
btnClose.onclick = () => {
    modal.classList.remove("modal_active");
}