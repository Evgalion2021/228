import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import navbarPartReducer from "./navbarPartReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  navbarPart: navbarPartReducer,
  usersPage: usersPageReducer,
});

let store = createStore(reducers);

export default store;
