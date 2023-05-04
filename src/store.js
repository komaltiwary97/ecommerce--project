import {createStore,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer } from './reducers/userReducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
    userRegisterReducer : userRegisterReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;