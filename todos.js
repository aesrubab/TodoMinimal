const todoTitle = document.getElementById("todoTitle");
const todoDescription = document.getElementById("todoDescription");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {
  const title = todoTitle.value.trim();
  const description = todoDescription.value.trim();

  if (!title || !description) {
    alert("Her iki xanani dolduur!!");
    return;
  }

  const todoCard = document.createElement("div");
  todoCard.className = "todo-card";

  const todoTitleElement = document.createElement("strong");
  todoTitleElement.textContent = title;

  const todoDescriptionElement = document.createElement("p");
  todoDescriptionElement.textContent = description;

  todoCard.appendChild(todoTitleElement);
  todoCard.appendChild(todoDescriptionElement);

  todoList.appendChild(todoCard);

  todoTitle.value = "";
  todoDescription.value = "";
});
