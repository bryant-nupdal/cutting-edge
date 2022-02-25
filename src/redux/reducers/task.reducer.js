const taskReducer = (state = [], action ) => {
    switch (action.type) {
        case 'STORE_TASKS':
            return action.payload;
        default:
            return state;
    }
}
export default taskReducer;