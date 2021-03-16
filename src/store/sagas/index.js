import { fork, all } from 'redux-saga/effects';
import InitialSagas from './initialSaga';
import ProfileSaga from './profileSaga';
import KycSaga from './kycSaga';
import TradeHistorySaga from './tradeHistorySaga';

export default function* root() {
  yield all([fork(InitialSagas)]);
  yield all([fork(KycSaga)]);
  yield all([fork(ProfileSaga)]);
  yield all ([fork(TradeHistorySaga)]);
}
