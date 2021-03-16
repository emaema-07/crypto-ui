import { all, fork, race, call, put, takeLatest } from "redux-saga/effects";
import * as BuyCrypto from "../reducers/buyCrypto";
import { setBuyCryptoReq } from "../utils/buyCrypto";

export function* buyCryptoSaga(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(setBuyCryptoReq, params)
    });
    if (response) {
      yield put(
        BuyCrypto.actions.buyOrderDetailsSuccess({
          data: response
        })
      );
    } else {
      yield put(
        BuyCrypto.actions.buyOrderDetailsFailure({ message: "Fetch failure" })
      );
    }
  } catch (err) {
    yield put(
      BuyCrypto.actions.buyOrderDetailsFailure({ message: "Fetch failure" })
    );
  }
}

export function* watchbuyCryptoReq() {
  yield takeLatest(BuyCrypto.constants.BUY_ORDER_DETAILS, buyCryptoSaga);
}

export default function* root() {
  yield all([fork(watchbuyCryptoReq)]);
}
