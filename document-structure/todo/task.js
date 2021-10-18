//Необходимо написать простой планировщик дел. В данной версии все дела теряются после обновления страницы
let taskAdd = document.getElementById("tasks__add");//кнопка добавление дел
let taskInput = document.getElementById("task__input");//название новой задачи
let taskList = document.getElementById("tasks__list");//зона где выводится информация


taskAdd.onclick = () => {//на кнопку вешаем событие click
    if (taskInput.value && taskInput.value.trim().length > 0) {//получаем значение из input,trim- удаляем пробелы с начала и конца(получение списка дел) 
        let task = document.createElement("div");//создаем объект task, с типом div 
        task.classList.add("task");//добавляем задачу в список дел
        taskList.appendChild(task);//вставляем новый созданный элемент task в конец родителя taskList
        let title = document.createElement("div");//создаем объект title, с типом div
        title.classList.add("task__title");//добавляем задачу в список дел
        title.textContent = taskInput.value;//присваиваиваем новое значение input
        task.appendChild(title);//вставляем новый созданный элемент title в конец родителя task
        taskInput.value = "";//присваиваем новое пустое значение,для ввода новой информации ,enter
        let text = document.createElement("text");//создаем объект для удаление задачи
        task.appendChild(text);
        text.classList.add("task__remove");
        text.textContent = "x";
        text.onclick = () => {//при нажатии кнопки х происходит удаление задачи
        taskList.removeChild(task);//Удаляет дочерний элемент
        }
    }
    return false;
}