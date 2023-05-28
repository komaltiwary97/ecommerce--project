import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer, userLoginReducer, userListReducer } from './reducer/userReducers';
import {composeWithDevTools} from'redux-devtools-extension';
import { categoryReducer } from './reducer/categoryReducer';

const reducer = combineReducers({
    userRegisterReducer: userRegisterReducer,
    userLoginReducer: userLoginReducer,
    userListReducer: userListReducer,
    categoryReducer: categoryReducer
});
const dataFromLocalStorage = localStorage.getItem('loginInfo')
  ? JSON.parse(localStorage.getItem('logininfo'))
  : null;

const initialState = {
  userLoginReducer: {
    logininfo: dataFromLocalStorage
  }
};


const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
