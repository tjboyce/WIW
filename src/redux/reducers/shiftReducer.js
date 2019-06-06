const shiftReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SHIFTS':
            return action.payload
        default:
            return state;
    }
};
export default shiftReducer;