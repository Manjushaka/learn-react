import { combineReducers } from 'redux';

const initialState = {
  name: '',
  count: 0,
}

const reducerA = (state = initialState, action) => {
  switch (action.type) {
    case 'A_ADD':
      return {...state, count: state.count + 1};
    case 'A_NAME':
      return {...state, name: action.payload.name};
    default:
      return state;
  }
}

const reducerB = (state = initialState, action) => {
  switch (action.type) {
    case 'B_ADD':
      return {...state, count: state.count + 1};
    case 'B_NAME':
      return {...state, name: action.payload.name};
    default:
      return state;
  }
}

const reducerC = (state = initialState, action) => {
  switch (action.type) {
    case 'C_ADD':
      return {...state, count: state.count + 1};
    case 'C_NAME':
      return {...state, name: action.payload.name};
    default:
      return state;
  }
}

const reducerDemo2 = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED':
      return action.payload.selectedItem;
    default:
      return state;
  }
}

export default combineReducers({
  aData: reducerA,
  bData: reducerB,
  cData: reducerC,
  selectedItem: reducerDemo2,
});
