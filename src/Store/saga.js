import { all, takeEvery, put, call } from 'redux-saga/effects';
import actionCreator from './actionCreator';
import { ActionNames } from './constants';
import api from 'API';

// ISSUE: api 하나씩 try, catch 예외처리 해주는것이 번거로워 묶어주려고 했으나 아래 코드는 동작하지 않는다.
// 이런식으로 공통 오류 처리를 하는게 불가능하다고 하는데 방법이 있을까?
// createSagaMiddleware의 onError가 발생하면 일단 redux-saga는 이미 중단된 상태라고 한다.
// ref: https://github.com/redux-saga/redux-saga/issues/1698#issuecomment-443901419
/*
const safeCall = function*(saga, ...args) {
  try {
    yield call(saga, ...args);
  } catch (error) {
    console.log('please catch here'); // ??: 여기서 왜 catch가 안되는지?
  }
};
*/

function* asyncLogin(action) {
  const { email, password } = action.payload;

  try {
    const res = yield call(api.login, email, password);
    const { data: { loginUser, token } } = res.data;
    yield put(actionCreator.login(loginUser, token));
  } catch (error) {
    yield put(actionCreator.error(error));
  }
}

function* watchAsyncLogin() {
  yield takeEvery(ActionNames.REQUEST_USER_LOGIN, asyncLogin);
}

export default function* rootSaga() {
  yield all([ watchAsyncLogin() ]);
}
