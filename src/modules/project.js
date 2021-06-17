const projectCont = document.querySelector("#projectCont");
const projectFormBtn = document.querySelector("#openProjectForm");
let projectList = document.createElement("ul");
projectList.classList.add("projectList");

let projects = [];

const porjectListFunc = function () {
  projectList.innerHTML = "";

  projects.forEach((project) => {
    projectList.innerHTML += `<li>${project}</li>`;
  });
};

const projectForm = (function () {
  const form = document.createElement("form");
  form.classList.add("projectForm");
  form.classList.add("hide");

  const projectTitle = document.createElement("input");
  projectTitle.setAttribute("type", "input");

  const addCancel = document.createElement("div");
  addCancel.classList.add("addCancelProject");
  const add = document.createElement("button");
  add.textContent = "ADD";
  add.classList.add("addProjectBtn");
  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.classList.add("cancelProjectBtn");
  addCancel.appendChild(add);
  addCancel.appendChild(cancel);

  form.appendChild(projectTitle);
  form.appendChild(addCancel);
  projectCont.appendChild(form);

  return { form, projectTitle };
})();

(function () {
  projectCont.addEventListener("click", (e) => {
    e.preventDefault();

    if (projectForm.projectTitle.value == "") {
      return;
    } else if (e.target.textContent == "ADD") {
      projects.push(projectForm.projectTitle.value);
      console.log(projects);
      porjectListFunc();
      projectForm.projectTitle.value = "";
    } else if (e.target.textContent == "Cancel")
      projectForm.projectTitle.value = "";
  });
})();

(function () {
  projectFormBtn.addEventListener("click", (e) => {
    e.preventDefault();

    projectForm.form.classList.toggle("hide");
  });
})();

projectCont.append(projectList);
