let projects = [];
if (JSON.parse(localStorage.getItem("projects")) != null)
  projects = JSON.parse(localStorage.getItem("projects"));
let selectedProject;
if (localStorage.getItem("selectedProject") != null)
  selectedProject = JSON.parse(localStorage.getItem("selectedProject"));
const proForm = document.querySelector("#proForm");
const proList = document.createElement("ul");
proList.setAttribute("id", "proList");
document.querySelector("#proCont").appendChild(proList);

function proItemFunc(proVal) {
  let proItem = document.createElement("li");
  const delProItemBtn = document.createElement("span");
  delProItemBtn.setAttribute("id", "delProItemBtn");

  proItem.setAttribute("id", "proItem");
  proItem.textContent = proVal;
  proItem.append(delProItemBtn);

  proList.appendChild(proItem);
}

if (projects != null)
  (function () {
    projects.forEach((project) => {
      proItemFunc(project);
    });
  })();

if (selectedProject != null) {
  (function () {
    document.querySelectorAll("#proItem").forEach((item) => {
      if (item.textContent == selectedProject)
        item.style.backgroundColor = "gold";
    });
  })();
}

(function () {
  proForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let project = document.querySelector("#proForm > input[type=text]");
    const reg = /^[\w\s]{2,20}$/;

    if (
      projects == null ||
      projects.includes(project.value) ||
      !reg.test(project.value)
    ) {
      project.style.border = "2px solid red";
      project.style.outline = "red";
    }

    if (projects != null) {
      if (reg.test(project.value) && !projects.includes(project.value)) {
        proItemFunc(project.value);

        projects.push(project.value);
        localStorage.setItem("projects", JSON.stringify(projects));

        project.style.border = "none";

        proForm.reset();
      }
    } else if (reg.test(project.value)) {
      proItemFunc(project.value);

      projects.push(project.value);
      localStorage.setItem("projects", JSON.stringify(projects));

      project.style.border = "none";

      proForm.reset();
    }
  });
})();

(function () {
  proList.addEventListener("click", (e) => {
    if (e.target.parentElement.getAttribute("id") == "proItem") {
      e.target.parentElement.remove();
      projects = projects.filter((item) => {
        if (item != e.target.parentElement.textContent) return item;
      });
      localStorage.setItem("projects", JSON.stringify(projects));

      if (e.target.parentElement.textContent == selectedProject) {
        selectedProject = null;
        localStorage.setItem(
          "selectedProject",
          JSON.stringify(selectedProject)
        );
      }
    }
  });
})();

(function () {
  proList.addEventListener("click", (e) => {
    if (
      e.target.getAttribute("id") == "proItem" &&
      e.target.textContent == selectedProject
    ) {
      document.querySelectorAll("#proItem").forEach((item) => {
        item.style.backgroundColor = "whitesmoke";
      });
      selectedProject = null;
      localStorage.setItem("selectedProject", JSON.stringify(selectedProject));
    } else if (e.target.getAttribute("id") == "proItem") {
      document.querySelectorAll("#proItem").forEach((item) => {
        item.style.backgroundColor = "whitesmoke";
      });
      e.target.style.backgroundColor = "gold";
      selectedProject = e.target.textContent;
      localStorage.setItem("selectedProject", JSON.stringify(selectedProject));
    }
  });
})();

(function () {
  document.querySelector("#delProBtn").addEventListener("click", () => {
    proForm.reset();
  });
})();

export { projects, selectedProject };
