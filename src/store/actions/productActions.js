import products from "../../static/db.json";
export const initProduct = () => (dispatch) => {
  try {
    return dispatch({
      type: "INIT_PRODUCT",
      payload: products.products,
    });
  } catch (error) {
    console.log(error);
  }
};
