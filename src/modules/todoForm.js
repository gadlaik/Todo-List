import { selectedProject } from "./project";

const todoCont = document.querySelector("#todoCont");
const todoFormBtn = document.querySelector("#openTodoForm");

let todoFormFunc = (function () {
  const todoForm = document.createElement("form");
  todoForm.classList.add("todoForm");
  todoForm.classList.add("hide");

  const todoTitle = document.createElement("input");
  todoTitle.setAttribute("type", "text");

  const todoDesc = document.createElement("textarea");
  todoDesc.setAttribute("rows", "5");

  const todoDate = document.createElement("input");
  todoDate.setAttribute("type", "date");

  const prioCont = document.createElement("div");
  prioCont.classList.add("prioCont");
  const highLabel = document.createElement("label");
  highLabel.textContent = "HIGH";
  highLabel.setAttribute("for", "high");
  const highPrio = document.createElement("input");
  highPrio.setAttribute("type", "radio");
  highPrio.setAttribute("id", "high");
  highPrio.setAttribute("name", "prioGang");
  const medLabel = document.createElement("label");
  medLabel.textContent = "MEDIUM";
  medLabel.setAttribute("for", "medium");
  const medPrio = document.createElement("input");
  medPrio.setAttribute("type", "radio");
  medPrio.setAttribute("id", "medium");
  medPrio.setAttribute("name", "prioGang");
  const lowLabel = document.createElement("label");
  lowLabel.textContent = "LOW";
  lowLabel.setAttribute("for", "low");
  const lowPrio = document.createElement("input");
  lowPrio.setAttribute("type", "radio");
  lowPrio.setAttribute("id", "low");
  lowPrio.setAttribute("name", "prioGang");
  prioCont.append(highLabel);
  prioCont.append(highPrio);
  prioCont.append(medLabel);
  prioCont.append(medPrio);
  prioCont.append(lowLabel);
  prioCont.append(lowPrio);

  const addCancel = document.createElement("div");
  addCancel.classList.add("addCancelTodo");
  const add = document.createElement("button");
  add.textContent = "ADD";
  add.classList.add("addProjectBtn");
  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.classList.add("cancelProjectBtn");
  addCancel.appendChild(add);
  addCancel.appendChild(cancel);

  todoForm.append(todoTitle);
  todoForm.append(todoDesc);
  todoForm.append(todoDate);
  todoForm.append(prioCont);
  todoForm.append(addCancel);
  todoCont.append(todoForm);

  return { todoForm };
})();

(function () {
  todoFormBtn.addEventListener("click", (e) => {
    e.preventDefault();

    todoFormFunc.todoForm.classList.toggle("hide");
  });
})();
