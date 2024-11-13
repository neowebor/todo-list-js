const todoForm = document.getElementById("todo-form");
const displayTasks = document.getElementById("display-tasks");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    target: {
      elements: { inputTask },
    },
    target: formElement,
  } = e;

  if (!inputTask.value.trim()) {
    return;
  }

  const task = document.createElement("li");
  task.textContent = inputTask.value;
  task.setAttribute("data-task-status", "false");

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.textContent = "Видалити";

  displayTasks.append(task);
  task.append(deleteTaskBtn);

  formElement.reset();
});

displayTasks.addEventListener("click", (e) => {
  const { target } = e;

  if (target.tagName === "LI" && target.dataset.taskStatus === "false") {
    target.classList.toggle("completed");
  }

  if (target.tagName === "BUTTON") {
    target.parentElement.remove();
  }
});
