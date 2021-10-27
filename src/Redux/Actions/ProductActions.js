import axios from "axios";
import * as actionTypes from "../Constants/ProductContants";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://firevolrealestate.herokuapp.com/api/property`
    );
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.response });
  }
};
