const defaultState = {
  popup: false,
  i: 0,
};

const OPEN_POPUP = "OPEN_POPUP";
const CLOSE_POPUP = "CLOSE_POPUP";
const SET_ID = "SET_ID";

export const popupImageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return { ...state, popup: true };
    case CLOSE_POPUP:
      return { ...state, popup: false };
    case SET_ID:
      return { ...state, i: action.payload };
    default:
      return state;
  }
};

export const openPopupAction = () => ({ type: OPEN_POPUP });
export const closePopupAction = () => ({ type: CLOSE_POPUP });
export const setIdPopupAction = (payload) => ({ type: SET_ID, payload });
