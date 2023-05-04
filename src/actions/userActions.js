import axios from 'axios';
import { USER_REQUEST_REGISTER,USER_SUCCESS_REGISTER,USER_FALIURE_REGISTER } from "../constans/userConstans";

// action creators return an action with required payload
export const register = (name, email, password, role) => async (dispatch) => {
   try{
    dispatch({
      type: USER_REQUEST_REGISTER  
    });
    const config = {
       headers: {
        Accept: 'application/json',
        'Content-type': 'application/json' 
       },
    };
    const data = await axios.post(`http://localhost:8000/api/users/register`, {name, email, password, role},config);

      console.log('hello from api', data);

    dispatch({
        type: USER_SUCCESS_REGISTER,
        payload: data
    });

    }catch (error) {
        dispatch({
            type: USER_FALIURE_REGISTER,
            payload: error
        });
       console.log('error', error);
    }
   };