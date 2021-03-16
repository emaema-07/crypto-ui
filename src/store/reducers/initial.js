export const constants = {
  FIRST_CALL: "FIRST_CALL",

  GET_CURRENCIES_LIST:'GET_CURRENCIES_LIST',
  GET_CURRENCIES_LIST_SUCCESS:'GET_CURRENCIES_LIST_SUCCESS',
  GET_CURRENCIES_LIST_FAILURE:'GET_CURRENCIES_LIST_FAILURE',
  BUY_ORDER_DETAILS:'BUY_ORDER_DETAILS',
    BUY_ORDER_DETAILS_SUCCESS:'BUY_ORDER_DETAILS_SUCCESS',
    BUY_ORDER_DETAILS_FAILURE:'BUY_ORDER_DETAILS_FAILURE',
};

export const actions = {
  firstCall: params => {
    return {
      type: constants.FIRST_CALL,
      payload: params
    };
  },
  getCurrencies: params => {
    return{
      type: constants.GET_CURRENCIES_LIST,
      payload: params,
    }
  },
 getCurrenciesSuccess: response => {
    return{
      type: constants.GET_CURRENCIES_LIST_SUCCESS,
      payload: response,
    }
  },
 getCurrenciesFailure: response => {
    return{
      type: constants.GET_CURRENCIES_LIST_FAILURE,
      payload: response,
    }
  },
  buyOrderDetails: params => {
    return{
      type: constants.BUY_ORDER_DETAILS,
      payload: params,
    }
  },
 buyOrderDetailsSuccess: response => {
    return{
      type: constants.BUY_ORDER_DETAILS_SUCCESS,
      payload: response,
    }
  },
 buyOrderDetailsFailure: response => {
    return{
      type: constants.BUY_ORDER_DETAILS_FAILURE,
      payload: response,
    }
  },
};
export const initialState = {
  buyCryptoDetails:null,
  currencyList:null,
  details:null,
};
export const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FIRST_CALL:
      return {
        ...state,
        details: action.payload
      };
      case constants.GET_CURRENCIES_LIST:
        return {
          ...state, isLoading: true,
        };
      case constants.GET_CURRENCIES_LIST_SUCCESS:
        return {
          ...state, currencyList: action.payload.data && action.payload.data.response,
          isLoading: false,
        };
      case constants.GET_CURRENCIES_LIST_FAILURE:
        return {
          ...state, currencyList: [], isLoading: false,
        };case constants.BUY_ORDER_DETAILS:
        return {
          ...state,buyCryptoDetails: action.payload, 
          isLoading: true,
        };
      case constants.BUY_ORDER_DETAILS_SUCCESS:
        return {
          ...state, buyCryptoDetails: action.payload,
          isLoading: false,
        };
      case constants.BUY_ORDER_DETAILS_FAILURE:
        return {
          ...state, buyCryptoDetails: [], isLoading: false,
        };
    default:
      return state;
  }
};

export default actions;
