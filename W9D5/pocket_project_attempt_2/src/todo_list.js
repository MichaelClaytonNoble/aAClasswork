
  let todos = []; 

if(localStorage.getItem("todos")){
  todos = JSON.parse(localStorage.getItem("todos")); 
}

let todo_list = document.querySelector(".todos"); 
let todo_form = document.querySelector(".add-todo-form"); 


function addTodo(e){
  e.preventDefault();
  let addInput = document.querySelector('[name="add-todo"]'); 
  
  let todo= {
    todo: addInput.value,
    done: false
  }
  
  todos.push(todo);
  addInput.value =""; 
  localStorage.setItem("todos", JSON.stringify(todos))
  populateList([todo]);
}

function populateList(todos){

  todos.forEach( todo => {
    let li = document.createElement("li"); 
    let checkbox = document.createElement("input");
    checkbox.type='checkbox'; 
    let label = document.createElement("label");
    label.append(checkbox);
    label.innerText = todo.todo; 
    li.append(label);
    todo_list.append(li); 
  })
}


populateList(todos); 

todo_form.addEventListener("submit", addTodo); 