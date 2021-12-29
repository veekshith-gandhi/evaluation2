export const showMsg = (msg) => (dispatch) => {
  try {
    setTimeout(() => {
      hideMsg()(dispatch);
    }, 3000);
    return dispatch({
      type: "DISPLAY_MSG",
      payload: msg,
    });
  } catch (error) {
    console.log(error);
  }
};
export const hideMsg = () => (dispatch) => {
  try {
    return dispatch({
      type: "HIDE_MSG",
    });
  } catch (error) {
    console.log(error);
  }
};
