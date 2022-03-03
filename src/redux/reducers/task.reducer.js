export const taskReducer = (state = [], action ) => {
    switch (action.type) {
        case 'STORE_TASKS':
            return action.payload;
        default:
            return state;
    }
}

export const filteredTaskReducer = (state = [], action ) => {
    switch (action.type) {
        case 'SET_FILTERED_TASKS':
            return action.payload;
        default:
            return state;
    }
}