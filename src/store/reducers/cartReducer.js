const initState = { count: 0, items: [] };

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        count: state.count + 1,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
export default cartReducer;
