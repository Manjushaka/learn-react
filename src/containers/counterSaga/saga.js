import { delay, eventChannel, END, buffers } from 'redux-saga';
import {
  put,
  takeEvery,
  all,
  call,
  takeLatest,
  select,
  fork,
  take,
  actionChannel
} from 'redux-saga/effects';

import { getMockList } from './service';

export function* helloSaga() {
  console.log('hello Saga!!!!');
}

function* addAsync() {
  //const res1 = yield delay(1000); // delay返回的是一个Promise，当测试的时候不好比较操作结果。
  yield call(delay, 3000); // call返回的是一个effect，也就是一个纯的js对象。与put类似。
  yield put({
    type: 'SAGA_ADD'
  });
}

function* watchAddAsync() {
  yield takeEvery('SAGA_ADD_ASYNC', addAsync);
}

function* fetchMockList(p1, p2, p3) {
  console.log(p1, p2, p3);
  yield put({
    type: 'SAGA_FETCH_MOCK_LIST_REQUEST'
  });
  const { response, error } = yield call(getMockList);
  // const res = yield getMockList();
  if (response) {
    yield put({
      type: 'SAGA_FETCH_MOCK_LIST_SUCCESS',
      payload: {
        response
      }
    });
  } else {
    yield put({
      type: 'SAGA_FETCH_MOCK_LIST_FAIlURE',
      payload: {
        error
      }
    });
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
  console.log(time);
  yield call(delay, time);
  console.log('subtask over');
}

function* test() {
  yield fork(subtask, 3000);
  yield fork(subtask, 2000);
  call(delay, 1000);
  console.log('test over');
}

// export default function* rootSaga() {
//   // takeLatest 不允许发起多个task，如果前一个task正在运行，将被取消。保持始终只有一个task在运行。
//   yield takeLatest('SAGA_ADD_ASYNC', addAsync);
//   // takeEvery 允许多个task同时运行。
//   yield takeEvery('SAGA_FETCH_MOCK_LIST', fetchMockList);
//   yield takeEvery('*', function* (action) {
//     const state = yield select();
//     console.log('action: ', action);
//     console.log('state: ', state.counterSaga);
//   });
//   yield call(test);
//   console.log('finish root saga');
// }
function* fork1() {
  console.log('fork1 start.');
  yield call(delay, 1000);
  console.log('fork1 end.');
}

export default function* root() {
  console.log('start');
  yield fork(fork1);
  console.log('after fork');
}


/*
// actionChannel 例子
export default function* watchRequest() {
  const requestChan = yield actionChannel('TEST_CHANNEL');
  console.log(requestChan);
  while (true) {
    const { payload } = yield take(requestChan);
    yield fork(handleRequest, payload);
    console.log('watch.');
  }
}

function* handleRequest(payload) {
  console.log('handle Request: ', payload);
  yield call(delay, 1000);
  console.log('handle over.')
}
*/

/*
// eventChannel
function countdown(secs) {
  return eventChannel(emitter => {
    // const iv = setInterval(() => {
    //   secs -= 1;
    //   if (secs > 0) {
    //     emitter(secs);
    //   } else {
    //     console.log('END: ', END);
    //     emitter(END);
    //   }
    // }, 1000);

    const handler = () => {
      console.log('click button');
      emitter()
    };
    setTimeout(function() {
      document.getElementById('test-channel').addEventListener('click', handler);
    }, 1000);
    return () => {
      console.log('unsubscribe')
      // clearInterval(iv);
      document.getElementById('test-channel').removeEventListener('click', handler);
    }
  })
}

export default function* testEventChannel() {
  const chan = yield call(countdown);
  try{
    while(true) {
      let seconds = yield take(chan);
      console.log('countdown: ', seconds);
      // yield call(delay, 10000);
    }
  } finally {
    console.log('countdown terminated');
  }
}
*/
