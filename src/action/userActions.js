import axios from "axios";
import { USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FALIURE, USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,USER_LOGIN_FALIURE, USER_LOGOUT, ALL_USERS_DATA_REQUEST, ALL_USERS_DATA_SUCCESS, ALL_USERS_DATA_FALIURE } from "../constant/userConstanst";


export const register = (name, email, password, role) => async (dispatch) => {
    try{
        dispatch({
         type: USER_REGISTER_REQUEST
        });
        const config = {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json" 
            },
        };
        const {data} = await axios.post(`http://localhost:8000/api/users/register`,{name ,email ,password, role},config);
               
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
};

// LOGIN


export const login = ( email, password) => async (dispatch) => {
    try{
        dispatch({
         type: USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json" 
            },
        };
        const {data} = await axios.post(`http://localhost:8000/api/users/login`,{email ,password},config);
               
        console.log("data from api", data);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
        localStorage.setItem('logininfo', JSON.stringify(data));



    } catch(error) {
        dispatch({
           type: USER_LOGIN_FALIURE,
           payload: error
        });
        console.log("error", error);
    }
};

// LOGOUT

export const logout = () => async (dispatch) => {
    localStorage.removeItem('logininfo');
    dispatch({
        type: USER_LOGOUT
    });
};


// ALL USERS DATA

export const allusers = (token) => async (dispatch) => {
    try{
        dispatch({
            type: ALL_USERS_DATA_REQUEST
           });
   
           const config = {
               headers: {
                   Accept: "application/json",
                   "Content-type": "application/json" ,
                   Authorization: `Bearer ${token}`
               },
           };
           const {data} = await axios.get(`http://localhost:8000/api/users/getAllusers`, config);
           dispatch({
            type: ALL_USERS_DATA_SUCCESS,
            payload: data
        });
         
    } catch(error) {
        dispatch({
           type: ALL_USERS_DATA_FALIURE,
           payload: error
        });
        console.log("error", error);
    }  
           
    
}