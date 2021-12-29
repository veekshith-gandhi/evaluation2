import { showMsg } from "./alertAction";

export const addProduct = (item) => (dispatch) => {
  try {
    showMsg(item.name + " added to cart")(dispatch);
    return dispatch({
      type: "ADD_PRODUCT",
      payload: item,
    });
  } catch (error) {
    console.log(error);
  }
};
