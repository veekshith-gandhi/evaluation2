export const addProduct = (item) => (dispatch) => {
  try {
    return dispatch({
      type: "ADD_PRODUCT",
      payload: item,
    });
  } catch (error) {
    console.log(error);
  }
};
