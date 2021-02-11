import { useReducer } from "react";
import {combineReducers, createStore} from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import {usersReducer} from "./usersReducer";


let reducers =combineReducers({
  profilePage: profileReducer,
  dialogsReducer: dialogsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;