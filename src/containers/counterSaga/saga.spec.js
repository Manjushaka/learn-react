import test from 'tape';
import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { addAsync } from './saga';

test('saga add async test', (assert) => {
  const gen = addAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'saga add async must call delay(1000)',
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'SAGA_ADD'}),
    'saga add async must dispatch an SAGA_ADD action',
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'saga add async must be done',
  )

  assert.end();
});
