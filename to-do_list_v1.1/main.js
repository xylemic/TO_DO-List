// algo for this program
// 1. loop through the array
// 2. create some html code for each todo
// 3. put the html on web page using the dom
const addButton = document.getElementById('todo-btn');




// looping through the array with some default values
const todoList = [
    "make dinner @ 7",
    "wash dishes after dinner",
    "do laundry @ 10pm"
];

renderTodoList();


function renderTodoList() {
  // the accumm variable
let todoListHtml = '';


  // looping with the for loop
for (let i = 0; i < todoList.length; i++) {
  // getting the strings for each index
  const todoValue = todoList[i];

  // create(generating) html code for each todo
  const html = `<p>${todoValue}</p>`;

  // as we loop through the array, we update the accumm vaiable
  todoListHtml += html; // this is combining all the html elems
  //together
}

console.log(todoListHtml);

// putting the html on the web page
document.querySelector('.js-div').innerHTML = todoListHtml;

}


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

renderTodoList();
};