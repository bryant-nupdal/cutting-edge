export const tasksReducer = (state = [], action ) => {
    switch (action.type) {
        case 'STORE_TASKS':
            return action.payload;
        default:
            return state;
    }
}
