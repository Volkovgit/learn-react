import { useReducer } from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./autrReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import {usersReducer} from "./usersReducer";
import thunkMiddleware from "redux-thunk";


let reducers =combineReducers({
  profilePage: profileReducer,
  dialogsReducer: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;