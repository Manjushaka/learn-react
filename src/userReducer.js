import {
    UserFetchQuest,
    UserFetchSuccess,
    UserFetchFailure,
} from './constants';

const initialState = {
    isLoading: false,
    data: [],
    error: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserFetchQuest:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case UserFetchSuccess:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.payload.data,
                error: '',
            });
        case UserFetchFailure:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload.error
            });
        default:
            return state;
    }
}

export default userReducer;
