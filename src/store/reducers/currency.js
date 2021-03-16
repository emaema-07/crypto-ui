export const constants = {
    GET_CURRENCIES: "GET_CURRENCIES",
    GET_CURRENCIES_SUCCESS: "GET_CURRENCIES_SUCCESS",
    GET_CURRENCIES_FAILURE: "GET_CURRENCIES_FAILURE"
  };
  
  export const actions = {
    getCurrencies: params => {
      return {
        type: constants.GET_CURRENCIES,
        payload: params
      };
    },
    getCurrenciesSuccess: response => {
      return {
        type: constants.GET_CURRENCIES_SUCCESS,
        payload: response
      };
    },
    getCurrenciesFailure: response => {
      return {
        type: constants.GET_CURRENCIES_FAILURE,
        payload: response
      };
    }
  };
  
  export const initialState = {
    currencyList: null,
    isLoading: false
  };
  
  export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.GET_CURRENCIES:
        return {
          ...state,
          isLoading: true
        };
      case constants.GET_CURRENCIES_SUCCESS:
        return {
          ...state,
          currencyList: action.payload.data,
          isLoading: false
        };
      case constants.GET_CURRENCIES_FAILURE:
        return {
          ...state,
          tradeHistory: [],
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default actions;
  