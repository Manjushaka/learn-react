const initialState = {
  counter: 0,
}

function counterSagaReducer(state = initialState, action) {
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

export default counterSagaReducer;
