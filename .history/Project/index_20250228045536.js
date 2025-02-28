const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

let ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task)) => {
    toDoList(task);
  });
}
