import {
  Reddit1_list_request,
  Reddit1_list_success,
  Reddit1_list_failure,
} from './constant';

const initialState = {
  isFetching: false,
  response: {},
  error: '',
  params: '',
};

const reddit1 = (state = initialState, action) => {
  switch (action.type) {
    case Reddit1_list_request:
      return Object.assign({}, state, {
        isFetching: true,
        params: action.payload.params,
      });
    case Reddit1_list_success:
      return Object.assign({}, state, {
        isFetching: false,
        response: action.payload.response,
        error: '',
      });
    case Reddit1_list_failure:
      return Object.assign({}, state, {
        isFetching: false,
        response: {},
        error: action.payload.error,
      });
    default:
      return state;
  }
}

export default reddit1;
