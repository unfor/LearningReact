const initState = {
    visibilityFilter: 'SHOW_ALL',
    inputValue: 'Write Something',
    list: [
        {
            text: 'Consider using redux',
            completed: true
        },
        {
            text: 'Keep all state in a single tree',
            completed: false
        }
    ]
}
function todoApp(state = initState, action) {
    if (action.type === 'CHANGEINPUT') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.text;
        return newState;
    }
    if (action.type === 'ADD_TODO') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push({text: newState.inputValue, completed: false});
        newState.inputValue = '';
        return newState;
    }
    if (action.type === 'DELETE_TODO') {
        let newState = state;
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}
export default todoApp;