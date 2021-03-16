import { all, fork, race, call, put, takeLatest } from "redux-saga/effects";
import * as tradeHistory from "../reducers/tradeHistory";
import {
  getTradeHistorty,
} from "../utils/tradeHistory";

export function* getTradeHistory(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(getTradeHistorty, params)
    });
    if (response) {
      yield put(
        tradeHistory.actions.getTradeHistorySuccess({
          data: response
        })
      );
    } else {
      yield put(
        tradeHistory.actions.getTradeHistoryFailure({
          message: "Fetch failure"
        })
      );
    }
  } catch (err) {
    yield put(
      tradeHistory.actions.getTradeHistoryFailure({ message: "Fetch failure" })
    );
  }
}


export function* watchgetTradeHistory() {
  yield takeLatest(tradeHistory.constants.GET_TRADE_HISTORY, getTradeHistory);
}

export default function* root() {
  yield all([fork(watchgetTradeHistory)]);
}
