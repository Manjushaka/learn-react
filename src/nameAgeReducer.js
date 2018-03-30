const initialState = {
    name: 'lily',
    age: 12,
}


export default function nameAge(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return Object.assign({}, state, {
                name: action.payload,
            });
        case 'CHANGE_AGE':
            return Object.assign({}, state, {
                age: action.payload,
            });
        default:
            return state;
    }
}
