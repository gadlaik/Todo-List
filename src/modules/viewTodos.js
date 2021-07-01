let todoList = document.querySelector("#todoList");

const viewTodoFunc = function (pro) {
  let todos = JSON.parse(localStorage.getItem("todos"));
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    let item = document.createElement("li");
    item.classList.add("todoItem");

    let title = document.createElement("h2");
    let desc = document.createElement("p");
    let date = document.createElement("p");
    let prio = document.createElement("p");
    let done = document.createElement("input");
    done.setAttribute("type", "checkbox");
    done.setAttribute("id", "done");
    let del = document.createElement("div");
    del.textContent = "Remove";
    del.setAttribute("id", "delTodo");

    if (todo.project == pro) {
      title.textContent = todo.title;
      desc.textContent = "Description: " + todo.desc;
      date.textContent = "Date: " + todo.date;
      prio.textContent = "Priority: " + todo.prio;
      done.checked = todo.done;

      item.append(title);
      if (todo.desc) item.append(desc);
      if (todo.date) item.append(date);
      if (todo.prio) item.append(prio);
      item.append(done);
      item.append(del);
      item.id = todo.id;

      todoList.append(item);
    }
  });
};

export { viewTodoFunc };
