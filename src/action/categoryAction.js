import axios from 'axios';
import { CATEGORY_REQUEST_STARTED, CATEGORY_REQUEST_SUCCESS, CATEGORY_REQUEST_FALIURE} from '../constant/categoryConstant';


export const allCategories = (token) => async (dispatch) => {
    try {
      dispatch({
        type: CATEGORY_REQUEST_STARTED
      });
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      const { data } = await axios.get(`http://localhost:8000/api/category/getAll`, config);
      console.log('data=>', data);
      dispatch({
        type: CATEGORY_REQUEST_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_REQUEST_FALIURE,
        payload: error
      });
    }
  };