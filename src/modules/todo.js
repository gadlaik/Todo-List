import { projects, selectedProject } from "./project";

let todos = [];

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

    console.log(document.querySelector("#selPro").classList.contains("hide"));

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
      todoTitle.style.border = "2px solid red";
    } else if (selectedProject != "null") {
      document.querySelector("#selPro").classList.remove("hide");

      todoTitle.style.border = "1px solid rgb(118, 118, 118)";
      todos.push({
        title: todoTitle.value,
        desc: todoDesc.value == "" ? null : todoDesc.value,
        date: todoDate.value == "" ? null : todoDate.value,
        prio: todoPrio,
        project: selectedProject,
      });
      document.querySelector("#todoForm").reset();
    }

    console.log(todos);
  });
})();
