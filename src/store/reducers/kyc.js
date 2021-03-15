export const constants = {
  STORE_KEY_DETAILS: "STORE_KEY_DETAILS",

  SET_KYC_DETAILS: "SET_KYC_DETAILS",
  SET_KYC_DETAILS_SUCCESS: "SET_KYC_DETAILS_SUCCESS",
  SET_KYC_DETAILS_FAILURE: "SET_KYC_DETAILS_FAILURE"
};

export const actions = {
  storeKycDetails: params => {
    return {
      type: constants.STORE_KEY_DETAILS,
      payload: params
    };
  },
  setKycDetailsCall: params => {
    return {
      type: constants.SET_KYC_DETAILS,
      payload: params
    };
  },
  setKycDetailsCallSuccess: response => {
    return {
      type: constants.SET_KYC_DETAILS_SUCCESS,
      payload: response
    };
  },
  setKycDetailsCallFailure: response => {
    return {
      type: constants.SET_KYC_DETAILS_FAILURE,
      payload: response
    };
  }
};

export const initialState = {
  kyc_details: null,
  isLoading: false
};

export const kycReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.STORE_KEY_DETAILS:
      return {
        ...state,
        kyc_details: [...state.kyc_details, ...action.payload]
      };
    case constants.SET_KYC_DETAILS:
      return {
        ...state,
        isLoading: true
      };
    case constants.SET_KYC_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kyc_details: action.payload.data
      };
    case constants.SET_KYC_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        kyc_details: null,
      };
    default:
      return state;
  }
};

export default actions;
