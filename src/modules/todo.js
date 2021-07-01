import { selectedProject } from "./project";
import { viewTodoFunc } from "./viewTodos";

let todos =
  JSON.parse(localStorage.getItem("todos")) == null
    ? []
    : JSON.parse(localStorage.getItem("todos"));

viewTodoFunc(selectedProject);

(function () {
  let todoTitle = document.querySelector("#todoTitle");
  let todoDesc = document.querySelector("#todoDesc");
  let todoDate = document.querySelector("#todoDate");

  document.querySelector("#todoForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let todoPrio =
      document.querySelector('input[name="prioGang"]:checked') == null
        ? null
        : document.querySelector('input[name="prioGang"]:checked').id;

    if (
      selectedProject != null &&
      !document.querySelector("#selPro").classList.contains("hide")
    )
      document.querySelector("#selPro").classList.add("hide");
    if (selectedProject == null)
      document.querySelector("#selPro").classList.remove("hide");
    else if (
      todoTitle.value.length > 42 == true ||
      todoTitle.value.length < 1 == true
    ) {
      document.querySelector("#selPro").classList.add("hide");
      todoTitle.style.border = "2px solid red";
    } else if (selectedProject != "null") {
      document.querySelector("#selPro").classList.add("hide");
      todoTitle.style.border = "1px solid rgb(118, 118, 118)";

      todos.push({
        title: todoTitle.value,
        desc: todoDesc.value == "" ? null : todoDesc.value,
        date: todoDate.value == "" ? null : todoDate.value,
        prio: todoPrio,
        project: selectedProject,
        done: false,
        id: Math.random() + todoTitle.value + selectedProject,
      });

      localStorage.setItem("todos", JSON.stringify(todos));

      viewTodoFunc(selectedProject);

      document.querySelector("#todoForm").reset();
    }
  });
})();

let todoList = document.querySelector("#todoList");

(function () {
  todoList.addEventListener("click", (e) => {
    if (e.target.id == "delTodo") {
      todos = todos.filter((todo) => todo.id != e.target.parentElement.id);

      localStorage.setItem("todos", JSON.stringify(todos));

      viewTodoFunc(selectedProject);
    }
  });
})();

(function () {
  todoList.addEventListener("click", (e) => {
    if (e.target.id == "done") {
      console.log(e.target.parentElement.id);
      todos = todos.filter((todo) => {
        if (todo.done == false && todo.id == e.target.parentElement.id) {
          todo.done = true;
          return todo;
        } else if (todo.done == true && todo.id == e.target.parentElement.id) {
          todo.done = false;
          return todo;
        } else return todo;
      });

      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
})();
