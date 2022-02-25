export const workOrderReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORK_ORDER':
            return action.payload;
        default:
            return state;
    }
 }
 