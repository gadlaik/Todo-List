const proCont = document.querySelector("#proCont");
const todoCont = document.querySelector("#todoCont");

(function () {
  const proForm = document.createElement("form");
  proForm.setAttribute("id", "proForm");

  const proTitle = document.createElement("input");
  proTitle.setAttribute("type", "text");
  proTitle.setAttribute("placeholder", "Project Title");

  const addProBtn = document.createElement("input");
  addProBtn.setAttribute("type", "submit");
  addProBtn.setAttribute("id", "addProBtn");
  addProBtn.value = "";
  const delProBtn = document.createElement("div");
  delProBtn.setAttribute("id", "delProBtn");

  proForm.appendChild(proTitle);
  proForm.appendChild(addProBtn);
  proForm.appendChild(delProBtn);

  proCont.appendChild(proForm);
})();

(function () {
  const openTodoForm = document.createElement("div");
  openTodoForm.setAttribute("id", "toggleTodoForm");
  openTodoForm.textContent = "OPEN TODO FORM";

  openTodoForm.addEventListener("click", (e) => {
    if (openTodoForm.textContent == "OPEN TODO FORM") {
      openTodoForm.textContent = "CLOSE TODO FORM";
      document.querySelector("#todoForm").classList.toggle("hide");
    } else {
      openTodoForm.textContent = "OPEN TODO FORM";
      document.querySelector("#todoForm").classList.toggle("hide");
    }
  });

  todoCont.append(openTodoForm);
})();

(function () {
  const todoForm = document.createElement("form");
  todoForm.setAttribute("id", "todoForm");
  todoForm.classList.toggle("hide");

  const todoTitle = document.createElement("input");
  todoTitle.setAttribute("id", "todoTitle");
  todoTitle.setAttribute("type", "text");
  todoTitle.setAttribute("placeholder", "Todo Title");

  const selectPro = document.createElement("p");
  selectPro.setAttribute("style", "color: red; text-align: center");
  selectPro.classList.add("hide");
  selectPro.setAttribute("id", "selPro");
  selectPro.textContent = "Select a project";

  const todoDesc = document.createElement("textarea");
  todoDesc.setAttribute("id", "todoDesc");
  todoDesc.setAttribute("rows", 5);

  const todoDate = document.createElement("input");
  todoDate.setAttribute("id", "todoDate");
  todoDate.setAttribute("type", "date");

  const todoPrio = `<div id="prio"><label for="high">High<input name="prioGang" id="high" type="radio"/></label>
  <label for="medium">Medium<input name="prioGang" id="medium" type="radio"/></label>
  <label for="low">Low<input name="prioGang" id="low" type="radio"/></label></div>`;

  const addTodoBtn = document.createElement("input");
  addTodoBtn.setAttribute("type", "submit");
  const cancelTodoBtn = document.createElement("div");
  cancelTodoBtn.textContent = "Cancel";
  const addCancel = document.createElement("div");
  addCancel.setAttribute("id", "addCancel");
  addCancel.append(addTodoBtn);
  addCancel.append(cancelTodoBtn);

  todoForm.append(todoTitle);
  todoForm.append(selectPro);
  todoForm.append(todoDesc);
  todoForm.append(todoDate);
  todoForm.innerHTML += todoPrio;
  todoForm.append(addCancel);

  todoCont.append(todoForm);
})();

(function () {
  const todoList = document.createElement("ul");
  todoList.setAttribute("id", "todoList");

  todoCont.append(todoList);
})();
