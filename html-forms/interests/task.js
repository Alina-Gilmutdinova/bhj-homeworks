//Реализуйте функционал, когда при клике на галочку будут проставляться/сниматься галочки вложенных списков
let interestsAll = document.querySelectorAll(".interests");//подписываемся на всю группу

for (let interests of interestsAll) {//создаем переменную interests и перебираем его в цикле interestsAll (во всех значениях)
    const close = interests.closest(".interest");
    if (close) {
        const checkBox = close.querySelector(".interest__check");
        checkBox.onclick = () => {
            if (checkBox.checked) {
                f(close, true);//выбрать элемент если он нажат
            } else {
                f(close, false);//не выбирать
            };
        }
    }
};
function f(element, checked) {
    let items = element.querySelectorAll(".interest__check");
    for (let item of items) {
        item.checked = checked;
    };
}
