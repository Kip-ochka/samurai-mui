import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogReducer from "./dialogPageReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    sidebar: sidebarReducer
})

export const store = createStore(reducers)