export const timeCardReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_TIMECARD':
            return action.payload;
        default:
            return state;
    }
 }