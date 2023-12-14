const addBtn = document.querySelector(".plus-button");
const inputBox = document.querySelector(".todo-input-box");
const firstTask = document.querySelector(".first-task");
const todoList = document.querySelector(".todo-list-ul");

showTasks();

addBtn.addEventListener("click", () => {
  const userEnterTodo = inputBox.value.trim();
  const getLocalstorageData = JSON.parse(localStorage.getItem("todo")) || [];
  getLocalstorageData.push(userEnterTodo);

  if (!userEnterTodo) {
    alert("لطفا مطبی را وارد کنید");
  } else {
    localStorage.setItem("todo", JSON.stringify(getLocalstorageData));
  }

  showTasks();
  inputBox.value = "";
});

function deleteItem(index) {
  const getLocalstorageData = JSON.parse(localStorage.getItem("todo")) || [];
  const updatedItem = getLocalstorageData.filter((_, i) => i !== index);
  localStorage.setItem("todo", JSON.stringify(updatedItem));
  showTasks();
}

function showTasks() {
  let newTag = "";

  let getLocalstorageData = localStorage.getItem("todo");
  if (!getLocalstorageData) {
    listArray = ["کار شماره اول من"];
  } else {
    listArray = JSON.parse(getLocalstorageData);
  }

  listArray.forEach((element, index) => {
    newTag += `<li>
                    <div class="flex">
                        <button class="edit-button"><i class='bx bxs-square' style='color:#27ed2c'></i></button>
                        <p>${element}</p>
                    </div>
                    <button class="delete-button"><i class='bx bxs-trash' style='color:#df1226' onclick="deleteItem(${index})"></i></button>
                </li>`;
  });
  todoList.innerHTML = newTag;
}
