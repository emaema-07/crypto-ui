import { all, fork, race, call, put, takeLatest } from 'redux-saga/effects';
import * as Profile from '../reducers/profile';
import { setSignUpReq, getLoginReq } from '../utils/profile';

export function* signUpSaga(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(setSignUpReq, params),
    });
    if (response) {
      yield put(
        Profile.actions.signUpCallSuccess({
          data: response,
        }),
      );
    } else {
      yield put(Profile.actions.signUpCallFailure({ message: 'Fetch failure' }));
    }
  } catch (err) {
    yield put(Profile.actions.signUpCallFailure({ message: 'Fetch failure' }));
  }
}

export function* loginSaga(action) {
    const params = action.payload;
    try {
      const { response } = yield race({
        response: call(getLoginReq, params),
      });
      if (response) {
        yield put(
          Profile.actions.loginCallSuccess({
            data: response,
          }),
        );
      } else {
        yield put(Profile.actions.loginCallFailure({ message: 'Fetch failure' }));
      }
    } catch (err) {
      yield put(Profile.actions.loginCallFailure({ message: 'Fetch failure' }));
    }
  }

export function* watchSetSignUpReq() {
  yield takeLatest(Profile.constants.SIGNUP_CALL, signUpSaga);
}

export function* watchSetLoginReq() {
    yield takeLatest(Profile.constants.LOGIN_CALL, loginSaga);
  }

export default function* root() {
  yield all([
    fork(watchSetSignUpReq),
    fork(watchSetLoginReq),
  ]);
}
