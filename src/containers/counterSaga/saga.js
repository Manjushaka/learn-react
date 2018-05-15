import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';
export function* helloSaga() {
  console.log('hello Saga!!!!');
}

export function* addAsync() {
  console.log('add async saga');
  // yield delay(1000); // delay返回的是一个Promise，当测试的时候不好比较操作结果。
  yield call(delay, 1000); // call返回的是一个effect，也就是一个纯的js对象。与put类似。
  console.log('add async saga after delay');
  yield put({
    type: 'SAGA_ADD',
  });
  console.log('add async saga after put ADD effect');
}

function* watchAddAsync() {
  console.log('watch add async saga');
  yield takeEvery('SAGA_ADD_ASYNC', addAsync);
}

export default function* rootSaga() {
  console.log('root saga');
  yield all([
    helloSaga(),
    watchAddAsync(),
  ]);
}
