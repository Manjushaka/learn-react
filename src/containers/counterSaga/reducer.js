import { combineReducers } from 'redux';
const initialState = {
  counter: 0,
}

function addCounter(state = initialState, action) {
  switch (action.type) {
    case 'SAGA_ADD':
      console.log('reducer saga add.')
      return Object.assign({}, state, {
        counter: state.counter + 1
      });

    default:
      return state;
  }
}

const initialState2 = {
  isFetching: false,
  response: [],
  error: ''
}

function mockList(state = initialState2, action) {
  switch (action.type) {
    case 'SAGA_FETCH_MOCK_LIST_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        error: '',
      });
    case 'SAGA_FETCH_MOCK_LIST_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        response: action.payload.response,
      });

    case 'SAGA_FETCH_MOCK_LIST_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}

export default combineReducers({
  addCounter,
  mockList
});
