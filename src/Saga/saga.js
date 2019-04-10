import { all, takeEvery, put } from 'redux-saga/effects';
import actionCreator from 'Store/actionCreator';
import { ActionNames } from 'Store/constants';

const delay = (ms) => new Promise((res) => setTimeout(res, ms * 1000));

function* asyncLogin(action) {
  yield delay(2);
  const { email, password } = action.payload;
  yield put(actionCreator.login({ email }, password));
}

function* watchAsyncLogin() {
  yield takeEvery(ActionNames.REQUEST_USER_LOGIN, asyncLogin);
}

export default function* rootSaga() {
  yield all([ watchAsyncLogin() ]);
}
