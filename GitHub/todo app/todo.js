let todoList =
  //  JSON.parse(localStorage.getItem("todoList")) ||
  [
    { name: "watch youtube", dueDate: "2025-12-24" },
    { name: "make dinner", dueDate: "2025-12-25" },
  ];

function deleteAll() {
  localStorage.removeItem("todoList");
  todoList.splice({ todoObject });
  todoList = [];
  //Try making the property inside the array-object empty. If still not working, analyse how the function (localstorge, array value) works

  // todoList.splice(`${index}`, todoList.length);
  // todoElement = document.querySelector(".js-todo-html");
  // todoElement.innerHTML = "";
}
rendertodoList();

function rendertodoList() {
  /*This function takes whatever is in the array and displays it on the web page*/

  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { name } = todoObject;
    const { dueDate } = todoObject;
    const html = `
          <div>${name}</div>
          <div> ${dueDate} </div>
          <button onclick="todoList.splice(${index}, 1)
            rendertodoList();" class="delete-button js-delete-button">Delete
          </button>
          `;
    todoListHTML += html;

    let todoElement = document.querySelector(".js-todo-html");
    todoElement.innerHTML = todoListHTML;

    // Because what to be displayed are just string;
    // We checked how the display (todo element) looks like in the console.log, it was showing in the form of an array. we looped through and added eventListener to each of them.
    document
      .querySelectorAll(".js-delete-button")
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", () => {
          todoList.splice(index, 1);
          rendertodoList();
        });
      });
  });

  /*for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name } = todoObject;
    const { dueDate } = todoObject;
    const html = `
          <div>${name}</div>
          <div> ${dueDate} </div>
          <button onclick="todoList.splice(${i}, 1)
            rendertodoList();" class="delete-button">Delete
          </button>
          `;
    todoListHTML += html;

    const todoElement = document.querySelector(".js-todo-html");
    todoElement.innerHTML = todoListHTML;
    console.log(todoObject);
  }*/
}

function showTodo() {
  /*This function pushes the todo name into the array */

  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;
  const dateElement = document.querySelector(".js-dueDate");
  let dueDate = dateElement.value;
  //const
  todoList.push({ name: name, dueDate: dueDate });
  inputElement.value = "";
  dateElement.value = "";

  rendertodoList();
  localStorage.setItem("todoList", JSON.stringify(todoList));

  //dueDate = "";
  //console.log(todoList);
}
