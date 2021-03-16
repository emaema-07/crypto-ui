export const constants = {
  BUY_ORDER_DETAILS: "BUY_ORDER_DETAILS",
  BUY_ORDER_DETAILS_SUCCESS: "BUY_ORDER_DETAILS_SUCCESS",
  BUY_ORDER_DETAILS_FAILURE: "BUY_ORDER_DETAILS_FAILURE",

  CLEAR_STATUS: "CLEAR_STATUS",

  STORE_DETAILS: "STORE_DETAILS",

  CARD_DETAILS: "CARD_DETAILS",
};

export const actions = {
  clearStatus: params => {
    return {
      type: constants.CLEAR_STATUS,
      payload: params
    };
  },
  storeDetails: params => {
    return {
      type: constants.STORE_DETAILS,
      payload: params
    };
  },
  cardDetails: params => {
    return {
      type: constants.CARD_DETAILS,
      payload: params
    };
  },
  buyOrderDetails: params => {
    return {
      type: constants.BUY_ORDER_DETAILS,
      payload: params
    };
  },
  buyOrderDetailsSuccess: response => {
    return {
      type: constants.BUY_ORDER_DETAILS_SUCCESS,
      payload: response
    };
  },
  buyOrderDetailsFailure: response => {
    return {
      type: constants.BUY_ORDER_DETAILS_FAILURE,
      payload: response
    };
  }
};

export const initialState = {
  buyCryptoDetails: null,
  isLoading: false,
  is_success: false,
  storeDetails:null,
  cardDetails:null,
};

export const buyReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CLEAR_STATUS:
      return {
        ...state,
        is_success: false
      };
      case constants.STORE_DETAILS:
        return {
          ...state,
          storeDetails: action.payload
        };
        case constants.CARD_DETAILS:
          return {
            ...state,
            cardDetails: action.payload
          };
    case constants.BUY_ORDER_DETAILS:
      return {
        ...state,
        buyCryptoDetails: action.payload,
        isLoading: true,
        is_success: false
      };
    case constants.BUY_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        buyCryptoDetails: action.payload,
        isLoading: false,
        is_success: true
      };
    case constants.BUY_ORDER_DETAILS_FAILURE:
      return {
        ...state,
        buyCryptoDetails: [],
        isLoading: false,
        is_success: false
      };
    default:
      return state;
  }
};

export default actions;
