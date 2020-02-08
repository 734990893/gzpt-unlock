import { race, all, call, take, delay } from 'redux-saga/effects';

const url = 'http://127.0.0.1:5050/stage';
const POLL_START = 'start';
const POLL_STOP = 'end';

function* fetchStage() {
  while (true) {
    const data = yield fetch(url, {
      method: 'GET'
    }).then(response => response.json());
    console.log(data);

    yield delay(1000);
  }
}

function* actionWatcher() {
  while (true) {
    yield take(POLL_START);
    yield race([call(fetchStage), take(POLL_STOP)]);
  }
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
