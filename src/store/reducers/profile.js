export const constants = {
  SIGNUP_CALL: "SIGNUP_CALL",
  SIGNUP_CALL_SUCCESS: "SIGNUP_CALL_SUCCESS",
  SIGNUP_CALL_FAILURE: "SIGNUP_CALL_FAILURE",

  LOGIN_CALL: "LOGIN_CALL",
  LOGIN_CALL_SUCCESS: "LOGIN_CALL_SUCCESS",
  LOGIN_CALL_FAILURE: "LOGIN_CALL_FAILURE",

  CLEAR_STATUS: "CLEAR_STATUS"
};

export const actions = {
  clearStatus: params => {
    return {
      type: constants.CLEAR_STATUS,
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
  }
};

export const initialState = {
  isLoading: false,
  user_details: null,
  user_token: null,
  login_success: false,
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CLEAR_STATUS:
      return {
        ...state,
        login_success: false
      }
    case constants.SIGNUP_CALL:
      return {
        ...state,
        isLoading: true,
        login_success: false,
      };
    case constants.SIGNUP_CALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user_token: action.payload.data.token,
        user_details: action.payload.data.user,
        login_success: true,
      };
    case constants.SIGNUP_CALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        user_details: null,
        login_success: false,
      };
    case constants.LOGIN_CALL:
      return {
        ...state,
        isLoading: true
      };
    case constants.LOGIN_CALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user_token: action.payload.data.token,
        user_details: action.payload.data.user,
        login_success: true,
      };
    case constants.LOGIN_CALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        user_details: null
      };
    default:
      return state;
  }
};

export default actions;
