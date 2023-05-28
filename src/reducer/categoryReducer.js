import { CATEGORY_REQUEST_STARTED, CATEGORY_REQUEST_SUCCESS, CATEGORY_REQUEST_FALIURE } from "../constant/categoryConstant";

export const categoryReducer= (state = {}, action) => {
    switch(action.type) {
       case CATEGORY_REQUEST_STARTED:
           return {loading: true};
           case CATEGORY_REQUEST_SUCCESS:
               return {loading: false, categorylist: action.payload};
               case CATEGORY_REQUEST_FALIURE:
                   return {loading: false, error: action.payload};
                   default:
                       return state;
    }

};