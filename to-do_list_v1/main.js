// algo for this program
// 1. create an arr to store todos
// 2. when add button is clicked, do no 3 below
// 3. get text from input textbox
// 4. add each item to an array
// 5. console.log() the array
const addButton = document.getElementById('todo-btn');

const todoList = [];

addButton.addEventListener('click', () => {
  addTodo();
})

function addTodo() {
 const inputElems =  document.querySelector('.js-input');
 const todoInput = inputElems.value;
//  console.log(todoInput);
todoList.push(todoInput);
console.log(todoList);

inputElems.value = '';
};