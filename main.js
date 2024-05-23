// algo for this program
// 1. save the data
// 2. create some html code for each todo
// 3. make it interactive
const addButton = document.getElementById('todo-btn');




// looping through the array with some default values
const todoList = [
//   {
//   name: 'make dinner',
//   dueDate: '2022-12-22'
// }, {
//   name: 'wash dishes',
//   dueDate: '2022-12-22'
// }
];

renderTodoList();


function renderTodoList() {
  // the accumm variable
let todoListHTML = '';


  // looping with the for loop
for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    // alternative way for looping through the array
    /*
      todoList.forEach((function)(todoObject, index) {
        const { name, dueDate } = todoObject;

        //create(generating) html code for each todo
       const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
      })

    */


// create(generating) html code for each todo
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;

    // as we loop through the array, we update the accumm variable
    todoListHTML += html;  // this is combining all the html elems
  //together
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



addButton.addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector('#js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}