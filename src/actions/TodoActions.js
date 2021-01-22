export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            text: text
        }
    }
}

export function editTodo(id, text, mark) {
    return {
        type: 'EDIT_TODO',
        payload: {
            id: id,
            text: text,
            mark: mark
        }
    }
}

export function removeTodo(id) {
    return {
        type: 'REMOVE_TODO',
        payload: {
            id: id
        }
    }
}

export function changeStatus(id, mark) {
    return {
        type: 'STATUS_TODO',
        payload: {
            id: id,
            mark: mark
        }
    }
}


export function changeStatusAll(mark) {
    return {
        type: 'STATUS_ALL',
        payload: {
            mark: mark
        }
    }
}