export const constants = {
  SIGNUP_CALL: "SIGNUP_CALL",
  SIGNUP_CALL_SUCCESS: "SIGNUP_CALL_SUCCESS",
  SIGNUP_CALL_FAILURE: "SIGNUP_CALL_FAILURE",

  LOGIN_CALL: "LOGIN_CALL",
  LOGIN_CALL_SUCCESS: "LOGIN_CALL_SUCCESS",
  LOGIN_CALL_FAILURE: "LOGIN_CALL_FAILURE",

  GET_KYC: "GET_KYC",
  GET_KYC_SUCCESS: "GET_KYC_SUCCESS",
  GET_KYC_FAILURE: "GET_KYC_FAILURE",

  CLEAR_STATUS: "CLEAR_STATUS",

  CLEAR_LOGIN: "CLEAR_LOGIN"
};

export const actions = {
  clearStatus: params => {
    return {
      type: constants.CLEAR_STATUS,
      payload: params
    };
  },
  clearLogin: params => {
    return {
      type: constants.CLEAR_LOGIN,
      payload: params
    };
  },
  signUpCall: params => {
    return {
      type: constants.SIGNUP_CALL,
      payload: params
    };
  },
  signUpCallSuccess: response => {
    return {
      type: constants.SIGNUP_CALL_SUCCESS,
      payload: response
    };
  },
  signUpCallFailure: response => {
    return {
      type: constants.SIGNUP_CALL_FAILURE,
      payload: response
    };
  },
  loginCall: params => {
    return {
      type: constants.LOGIN_CALL,
      payload: params
    };
  },
  loginCallSuccess: response => {
    return {
      type: constants.LOGIN_CALL_SUCCESS,
      payload: response
    };
  },
  loginCallFailure: response => {
    return {
      type: constants.LOGIN_CALL_FAILURE,
      payload: response
    };
  },
  kycCall: params => {
    return {
      type: constants.GET_KYC,
      payload: params
    };
  },
  kycCallSuccess: response => {
    return {
      type: constants.GET_KYC_SUCCESS,
      payload: response
    };
  },
  kycCallFailure: response => {
    return {
      type: constants.GET_KYC_FAILURE,
      payload: response
    };
  }
};

export const initialState = {
  isLoading: false,
  current_user_details: null,
  auth_token: null,
  login_success: false,
  kyc_data: null,
  user_typed_datas: null,
  message: null,
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CLEAR_LOGIN: 
      return {
        ...state,
        login_success: false,
        current_user_details: null,
        auth_token: null,
      }
    case constants.CLEAR_STATUS:
      return {
        ...state,
        login_success: false,
        message: null
      }
    case constants.SIGNUP_CALL:
      return {
        ...state,
        isLoading: true,
        login_success: false,
        user_typed_datas: action.payload
      };
    case constants.SIGNUP_CALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        auth_token: action.payload.data.token,
        current_user_details: action.payload.data.user,
        login_success: true,
        kyc_data: null
      };
    case constants.SIGNUP_CALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        current_user_details: null,
        login_success: false,
      };
    case constants.LOGIN_CALL:
      return {
        ...state,
        isLoading: true,
        user_typed_datas: action.payload,
        message: null
      };
    case constants.LOGIN_CALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        auth_token: action.payload.data.token,
        current_user_details: action.payload.data.user,
        kyc_data: action.payload.data.kyc,
        login_success: true,
        message: null,
      };
    case constants.LOGIN_CALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        current_user_details: null,
        kyc_data: null,
        message: action.payload.status,
      };
      case constants.GET_KYC:
      return {
        ...state,
        isLoading: true
      };
    case constants.GET_KYC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        kyc_data: action.payload.data,
      };
    case constants.GET_KYC_FAILURE:
      return {
        ...state,
        isLoading: false,
        current_user_details: null,
        kyc_data: null
      };
    default:
      return state;
  }
};

export default actions;
