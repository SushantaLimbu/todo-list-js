function addItem() {

  let input = document.getElementById("todoInput");
  let text = input.value;

  if (text === "") {
    alert("Please enter a todo item");
    return;
  }

  let li = document.createElement("li");
  li.textContent = text;

  let removeButton = document.createElement("button");
  removeButton.id = "cancelBtn";
  removeButton.textContent = "X";
  removeButton.onclick = function() {
    removeItem(removeButton);
  };

  li.appendChild(removeButton);

  document.getElementById("todoList").appendChild(li);

  input.value = "";
}

function removeItem(button) {
  let li = button.parentElement;
  li.remove();
}