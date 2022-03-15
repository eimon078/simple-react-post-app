import { combineReducers } from "redux";
import commentsReducers from "./commentsReducers";

const reducers = combineReducers({ commentsReducers });

export default reducers;
