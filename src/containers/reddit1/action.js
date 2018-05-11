import axios from 'axios';

import {
  Reddit1_list_request,
  Reddit1_list_success,
  Reddit1_list_failure,
} from './constant';

const requestList = (params) => ({
  type: Reddit1_list_request,
  payload: {
    params,
  }
});

const successList = (response) => ({
  type: Reddit1_list_success,
  payload: {
    response,
  }
});

const failureList = (error) => ({
  type: Reddit1_list_failure,
  payload: {
    error,
  }
});

export const fetchList = (params) => (dispatch, getState) => {
  dispatch(requestList(params));
  return axios(`https://www.reddit.com/r/${params.name}.json`).then(response => new Promise((resolve, reject) => {
    console.log('get list.');
    if (response.status === 200) {
      resolve(response.data);
    }
    reject(response.data);
  })).then((data) => {
    dispatch(successList(data));
  }).catch((error) => {
    dispatch(failureList(error.message || 'something bad'));
  });
}
