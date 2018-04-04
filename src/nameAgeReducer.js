const initialState = {
    name: 'lily',
    age: 12,
}


export default function nameAge(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return Object.assign({}, state, {
                name: action.payload.name,
            });
        case 'CHANGE_AGE':
            return Object.assign({}, state, {
                age: action.payload.age,
            });
        default:
            return state;
    }
}
