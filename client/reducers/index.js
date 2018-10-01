import { combineReducers } from "redux";
import phrazeReducer from "./phrazeReducer";
import feedReducer from "./feedReducer";

export default combineReducers({ phraze: phrazeReducer, feed: feedReducer });
