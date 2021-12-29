const initState = { message: null };

const alertReducer = (state = initState, action) => {
  switch (action.type) {
    case "DISPLAY_MSG":
      return {
        ...state,
        message: action.payload,
      };
    case "HIDE_MSG":
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
export default alertReducer;
