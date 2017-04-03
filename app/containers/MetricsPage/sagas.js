import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancelled } from 'redux-saga/effects';
import { addMeasurements } from './actions';

export const createMetricsChannel = () => (
  eventChannel((emit) => {
    const source = new EventSource('https://jsdemo.envdev.io/sse');
    source.addEventListener('message', (e) => {
      const data = JSON.parse(e.data);
      emit({ data });
    }, false);

    return () => source.close();
  })
);

export function* watchMetricsChannel() {
  const chan = yield call(createMetricsChannel);

  try {
    while (true) { // eslint-disable-line
      const { data } = yield take(chan);
      yield put(addMeasurements(data));
    }
  } finally {
    if (yield cancelled()) {
      chan.close();
    }
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield fork(watchMetricsChannel);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
