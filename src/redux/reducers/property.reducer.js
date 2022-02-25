const propertyReducer = (state = [], action ) => {
    switch (action.type) {
        case 'STORE_PROPERTY':
            return action.payload;
        default:
            return state;
    }
}
export default propertyReducer;