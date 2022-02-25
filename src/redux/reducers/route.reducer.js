export const routesReducer = (state = [], action ) => {
    switch (action.type) {
        case 'STORE_ALL_ROUTES':
            return action.payload;
        default:
            return state;
    }
}

export const routeReducer = (state = [], action ) => {
    switch (action.type) {
        case 'STORE_ALL_ROUTES':
            return action.payload;
        default:
            return state;
    }
}
