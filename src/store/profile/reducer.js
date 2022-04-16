import { SET_NAME, TOGGLE_CHECKBOX } from "./actions";

const initialState = {
  name: "Jack Sparrow",
  showName: false,
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        showName: !state.showName,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
