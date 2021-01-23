/* eslint-disable */
const initState = [{
    id: 0,
    text: 'Todo',
    mark: false
}]

// sai: không dùng map để map từ object to object được.
const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: state.length == 0 ? 0 : state[state.length - 1].id + 1, text: action.payload.text, mark: false }];
        case 'EDIT_TODO':
            return state.map((todo) => { todo.id == action.payload.id ? action.payload : todo });
        case 'REMOVE_TODO':
            return state.map((todo) => { if (todo.id != action.payload.id) return todo });
        case 'STATUS_TODO':
            return state.map((todo) => { todo.id == action.payload.id ? { id: todo.id, text: todo.text, mark: action.payload.mark } : todo });
        case 'STATUS_ALL':
            return state.map((todo) => { return { id: todo.id, text: todo.text, mark: action.payload.mark } });
        default:
            return state;
    }
}

export default TodoReducer;