import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FALIURE, USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, USER_LOGIN_FALIURE, USER_LOGOUT, ALL_USERS_DATA_REQUEST, ALL_USERS_DATA_SUCCESS, ALL_USERS_DATA_FALIURE } from "../constant/userConstanst";



export const userRegisterReducer = (state = {}, action) => {
     switch(action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true};
            case USER_REGISTER_SUCCESS:
                return {loading: false, userinfo: action.payload};
                case USER_REGISTER_FALIURE:
                    return {loading: false, error: action.payload};
                    default:
                        return state;
     }

};

// LOGIN

export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
       case USER_LOGIN_REQUEST:
           return {loading: true};
           case USER_LOGIN_SUCCESS:
               return {loading: false, logininfo: action.payload};
               case USER_LOGIN_FALIURE:
                   return {loading: false, error: action.payload};
                   case USER_LOGOUT:
                    return {};
                   default:
                       return state;
    }

};

// all users data

export const userListReducer = (state = {}, action) => {
    switch(action.type) {
       case ALL_USERS_DATA_REQUEST:
           return {loading: true};
           case ALL_USERS_DATA_SUCCESS:
               return {loading: false, userListinfo: action.payload};
               case ALL_USERS_DATA_FALIURE:
                   return {loading: false, error: action.payload};
                   default:
                       return state;
    }

};



