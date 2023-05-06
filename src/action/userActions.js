import axios from "axios";
import { USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FALIURE } from "../constant/userConstanst";


export const register = (name, email, password, role) => async(dispatch) => {
    try{
        dispatch({
         type: USER_REGISTER_REQUEST
        });
        const config = {
            header: {
                Accept: "application/json",
                "Content-type": "application/json" 
            },
        };
        const data = await axios.post(`http://localhost:8000/api/users/register`,{name ,email ,password, role},config);
               
        console.log("data from api", data);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });


    } catch(error) {
        dispatch({
           type: USER_REGISTER_FALIURE,
           payload: error
        });
        console.log("error", error);
    }
}