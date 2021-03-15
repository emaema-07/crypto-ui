import { fork, all } from 'redux-saga/effects';
import InitialSagas from './initialSagas';

export default function* root() {
  yield all([fork(InitialSagas)]);
}
