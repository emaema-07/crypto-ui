import { combineReducers } from "redux";
import { initialReducer as initial } from "./reducers/initial";
import { ProfileReducer as profile } from './reducers/profile';
import { kycReducer as kyc } from "./reducers/kyc";

export default combineReducers({
  initial,
  profile,
  kyc
});
