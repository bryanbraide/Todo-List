const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

let ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
})

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }
}

const liEl = document.createElement("li")
if (task && task.checked) {
  liEl.classList.add("checked");
}

liEl.innerText = newTask;
uiEl.appendChild(liEl);
inputEl.value = "";
const checkBtnEl = document.createElement("div");
checkBtnEl.innerHTML = '
  <i i class="fas fa-trash" ></i>
    '