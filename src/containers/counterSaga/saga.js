import { delay } from 'redux-saga';
import { put, takeEvery, all, call, takeLatest, select, fork } from 'redux-saga/effects';

import { getMockList } from './service';

export function* helloSaga() {
  console.log('hello Saga!!!!');
}

function* addAsync() {
  //const res1 = yield delay(1000); // delay返回的是一个Promise，当测试的时候不好比较操作结果。
  yield call(delay, 3000); // call返回的是一个effect，也就是一个纯的js对象。与put类似。
  yield put({
    type: 'SAGA_ADD',
  });
}

function* watchAddAsync() {
  yield takeEvery('SAGA_ADD_ASYNC', addAsync);
}

function* fetchMockList(p1, p2, p3) {
  console.log(p1, p2, p3);
  yield put({
    type: 'SAGA_FETCH_MOCK_LIST_REQUEST',
  });
  const { response, error } = yield call(getMockList);
  // const res = yield getMockList();
  if (response) {
    yield put({
      type: 'SAGA_FETCH_MOCK_LIST_SUCCESS',
      payload: {
        response,
      },
    });
  } else {
    yield put({
      type: 'SAGA_FETCH_MOCK_LIST_FAIlURE',
      payload: {
        error,
      },
    })
  }
}

function* watchFetchMockList() {
  yield takeEvery('SAGA_FETCH_MOCK_LIST', fetchMockList);
}

// export default function* rootSaga() {
//   console.log('root saga');
//   yield all([
//     helloSaga(),
//     watchAddAsync(),
//   ]);
// }

function* subtask(time) {
  console.log(time)
  yield call(delay, time);
  console.log('subtask over');
}

function* test() {
  yield fork(subtask, 3000);
  yield fork(subtask, 2000);
  call(delay, 1000);
  console.log('test over');
}

export default function* rootSaga() {
  // takeLatest 不允许发起多个task，如果前一个task正在运行，将被取消。保持始终只有一个task在运行。
  yield takeLatest('SAGA_ADD_ASYNC', addAsync);
  // takeEvery 允许多个task同时运行。
  yield takeEvery('SAGA_FETCH_MOCK_LIST', fetchMockList);
  yield takeEvery('*', function* (action) {
    const state = yield select();
    console.log('action: ', action);
    console.log('state: ', state.counterSaga);
  });
  yield call(test);
  console.log('finish root saga');
}
