import { combineReducers } from "redux";
import { initialReducer as initial } from "./reducers/initial";
import { ProfileReducer as profile } from './reducers/profile';
import { kycReducer as kyc } from "./reducers/kyc";
import {tradeHistoryReducer as tradeHistory} from "./reducers/tradeHistory";
import { buyReducer as buyCrypto } from "./reducers/buyCrypto";

export default combineReducers({
  initial,
  profile,
  kyc,
  tradeHistory,
  buyCrypto
});
