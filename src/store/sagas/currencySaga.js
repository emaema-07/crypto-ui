import { all, fork, race, call, put, takeLatest } from "redux-saga/effects";
import * as Currency from "../reducers/currency";
import { getCurrenciesReq } from "../utils/currency";

export function* currencySaga(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(getCurrenciesReq, params)
    });
    if (response) {
      yield put(
        Currency.actions.getCurrenciesSuccess({
          data: response
        })
      );
    } else {
      yield put(
        Currency.actions.getCurrenciesFailure({ message: "Fetch failure" })
      );
    }
  } catch (err) {
    yield put(
      Currency.actions.getCurrenciesFailure({ message: "Fetch failure" })
    );
  }
}

export function* watchgetCurrencyReq() {
  yield takeLatest(Currency.constants.GET_CURRENCIES, currencySaga);
}

export default function* root() {
  yield all([fork(watchgetCurrencyReq)]);
}
