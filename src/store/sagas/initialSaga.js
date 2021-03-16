import { all, fork, race, call, put, takeLatest } from 'redux-saga/effects';
import * as Initial from '../reducers/initial';
import { getCallReq,getCurrenciesReq } from '../utils/initial';

export function* firstSaga(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(getCallReq, params),
    });
    if (response) {
      yield put(
        Initial.actions.firstCallSuccess({
          data: response,
        }),
      );
    } else {
      yield put(Initial.actions.firstCallFailure({ message: 'Fetch failure' }));
    }
  } catch (err) {
    yield put(Initial.actions.firstCallFailure({ message: 'Fetch failure' }));
  }
}

export function* getCurrencies(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(getCurrenciesReq, params),
    });
    if (response) {
      yield put(
        Initial.actions.getCurrenciesSuccess({
          data: response,
        }),
      );
    } else {
      yield put(Initial.actions.getCurrenciesFailure({ message: 'Fetch failure' }));
    }
  } catch (err) {
    yield put(Initial.actions.getCurrenciesFailure({ message: 'Fetch failure' }));
  }
}


export function* watchFirstReq() {
  yield takeLatest(Initial.constants.FIRST_CALL, firstSaga);
}

export function* watchGetCurrenciesReq() {
  yield takeLatest(Initial.constants.GET_CURRENCIES_LIST, getCurrencies);
}

export default function* root() {
  yield all([
    fork(watchFirstReq),
    fork(watchGetCurrenciesReq),
  ]);
}
