import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';

function* login(action) {
  try {
    // Example
    // yield call(Callback, ...params)
    yield put({ type: types.LOGIN_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR, payload: error.message });
  }
}

function* authSaga() {
  yield takeLatest(types.LOGIN, login);
}

export default authSaga;
