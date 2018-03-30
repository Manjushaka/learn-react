const initialState = {
    count: 0,
    others: 'others',
};

export default function countAddMinus(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, state, {
                count: state.count + 1,
            });
        case 'MINUS':
            return Object.assign({}, state, {
                count: state.count - action.payload,
            });
        default:
            return state;
    }
};
