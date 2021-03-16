export const constants = {  
    GET_TRADE_HISTORY:'GET_TRADE_HISTORY',
    GET_TRADE_HISTORY_SUCCESS:'GET_TRADE_HISTORY_SUCCESS',
    GET_TRADE_HISTORY_FAILURE:'GET_TRADE_HISTORY_FAILURE',
  };
  
  export const actions = {
    getTradeHistory: params => {
      return{
        type: constants.GET_TRADE_HISTORY,
        payload: params,
      }
    },
   getTradeHistorySuccess: response => {
      return{
        type: constants.GET_TRADE_HISTORY_SUCCESS,
        payload: response,
      }
    },
   getTradeHistoryFailure: response => {
      return{
        type: constants.GET_TRADE_HISTORY_FAILURE,
        payload: response,
      }
    },
   
  };
  
  export const initialState = {
    tradeHistory: null,
    isLoading: false,
  };
  
  export const tradeHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.GET_TRADE_HISTORY:
        return {
          ...state,
          isLoading: true
        };
      case constants.GET_TRADE_HISTORY_SUCCESS:
        return {
          ...state,
          tradeHistory: action.payload,
          isLoading: false
        };
      case constants.GET_TRADE_HISTORY_FAILURE:
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
  