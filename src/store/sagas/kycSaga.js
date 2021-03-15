import { all, fork, race, call, put, takeLatest } from 'redux-saga/effects';
import * as Kyc from '../reducers/kyc';
import { setKycdetailsReq } from '../utils/kyc';

export function* setKycDetailsSaga(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(setKycdetailsReq, params),
    });
    if (response) {
      yield put(
        Kyc.actions.setKycDetailsCallSuccess({
          data: response,
        }),
      );
    } else {
      yield put(Kyc.actions.setKycDetailsCallFailure({ message: 'Fetch failure' }));
    }
  } catch (err) {
    yield put(Kyc.actions.setKycDetailsCallFailure({ message: 'Fetch failure' }));
  }
}

export function* watchsetKycDetailsReq() {
  yield takeLatest(Kyc.constants.SET_KYC_DETAILS, setKycDetailsSaga);
}

export default function* root() {
  yield all([
    fork(watchsetKycDetailsReq),
  ]);
}
