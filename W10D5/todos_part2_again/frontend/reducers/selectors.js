//we want the data that our components will accept to be in a specific
//format. 

//selectors are getter methods for the application state 
//selectors 
//        receive the state as an argument 
//        return a subset of the state data formatted in a specific way

//here we are transforming an object filled with todos into an array
//so that components can easily manipulate this data 

//we will be using this selector on the TodoList 
export const allTodos = (state) => {
  return Object.values(state.todos);
}

window.allTodos = allTodos;
