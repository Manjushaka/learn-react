import axios from 'axios';

import {
    getUserQuest,
    getUserSuccess,
    getUserFailure,
} from './action';

export function changeNameAsync(name) {
    return (dispatch, getState) => {
        console.log('thunk.', getState().nameAge);
        setTimeout(() => {
            console.log('thunk settimeout. start: ', getState().nameAge);
            dispatch({
                type: 'CHANGE_NAME',
                payload: {
                    name,
                },
            });
            console.log('thunk settimeout. end: ', getState().nameAge);
        }, 1000)
    }
}

export function fetchData(url) {
    return (dispatch, getState) => {
        dispatch(getUserQuest());
        return axios(url).then(res => {
            if (res.status === 200) {
                return dispatch(getUserSuccess({
                    data: res.data,
                }));
            } else {
                return dispatch(getUserFailure({
                    error: 'error',
                }));
            }
        }, err => {
             return dispatch(getUserFailure({
                error: 'error',
            }));
        });
    };
}

// export function fetchData(url) {
//     return (dispatch, getState) => {
//         const a = dispatch(getUserQuest());
//         console.log(a);
//         return axios(url).then(res => res.data, err => {
//             return dispatch(getUserFailure({
//                 error: 'error',
//             }));
//         }).then(data => dispatch(getUserSuccess({
//             data,
//         })));
//     };
// }
