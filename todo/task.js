(function() {
  const taskAdd = document.querySelector(`.tasks__add`);
  taskAdd.addEventListener(`click`, (elem) => {
    elem.preventDefault();
    const inputMessage = checkInput();
    interTasks(inputMessage)});
}())

document.addEventListener(`keydown`, button => {
  if (button.key.charCodeAt() === 69) {
    const inputMessage = checkInput();
    interTasks(inputMessage);
  }
})

function checkInput() {
  const inputMessage = document.querySelector(`.tasks__input`);
  return inputMessage.value.trim();
}

function interTasks(toDo) {
  let tasksList = document.querySelector(`.tasks__list`);
  if (toDo) {
    const task = creatTask(toDo);
    tasksList.appendChild(task);
    const taskRemove = task.querySelector(`.task__remove`);
    taskRemove.addEventListener(`click`, (elem => {
      elem.preventDefault();
      task.remove();
    }))
  }
}

function creatTask(toDo) {
  let task = document.createElement(`div`);
  task.setAttribute(`class`, `task`);
  task.insertAdjacentHTML(`afterBegin`, `<div class="task__title">${toDo}</div>`);
  task.insertAdjacentHTML(`beforeEnd`, `<a href="#" class="task__remove">&times;</a>`);
  return task
}