// let nextTodoId = 0;
export const changeInput = text => {
    return {
        type: 'CHANGEINPUT',
        text
    }
}
export const addTodo = ()  => {
    return {
        type: 'ADD_TODO',
        // id: nextTodoId++,
        // text
    }
}

export const deleteTodo = index => {
    return {
        type: 'DELETE_TODO',
        index,
    }
}