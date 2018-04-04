import {
    UserFetchQuest,
    UserFetchSuccess,
    UserFetchFailure,
} from './constants';

export const getUserQuest = () => {
    return ({
        type: UserFetchQuest,
    });
}

export const getUserSuccess = (payload) => {
    return ({
        type: UserFetchSuccess,
        payload,
    });
}

export const getUserFailure = (payload) => {
    return ({
        type: UserFetchFailure,
        payload,
    });
}
