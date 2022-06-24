import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from '../constant/productConstant';
import axios from 'axios';

export const productList = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_REQUEST,
      });

      const { data } = await axios.get('/api/v1/product');
      dispatch({
        type: PRODUCT_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_FAIL,
        payload:
          error.response && error.response.data.product.message
            ? error.response.data.product.message
            : error.message,
      });
    }
  };
};
