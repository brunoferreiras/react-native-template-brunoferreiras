import { fork, all } from 'redux-saga/effects';
import authSaga from './auth';

export default function* rootSaga() {
  yield all([
    fork(authSaga)
    // fork(otherSaga),
  ]);
}
