const initState = { products: [] };

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
