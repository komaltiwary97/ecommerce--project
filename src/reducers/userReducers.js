import { USER_REQUEST_REGISTER,USER_SUCCESS_REGISTER,USER_FALIURE_REGISTER } from "../constans/userConstans";

export const userRegisterReducer = (state = {},action) => {
    switch(action.type) {
        case USER_REQUEST_REGISTER:
        return {loading: true};
        case USER_SUCCESS_REGISTER:
        return {loading: false,userinfo: action.payload};
        case USER_FALIURE_REGISTER:
        return {loading: false, error: action.payload};
        default:
            return state;
    }   
    
}

