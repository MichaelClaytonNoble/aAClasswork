


export const todosReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch (action.type) {
        case 'ADD_TODO':
            nextState[action.todo.id] = action.todo;
            return nextState
        default:
            return oldState
    }

}