export const constants = {
  FIRST_CALL: "FIRST_CALL"
};

export const actions = {
  firstCall: params => {
    return {
      type: constants.FIRST_CALL,
      payload: params
    };
  }
};

export const initialState = {
  details: null
};

export const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FIRST_CALL:
      return {
        ...state,
        details: action.payload
      };
    default:
      return state;
  }
};

export default actions;
