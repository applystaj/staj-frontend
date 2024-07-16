import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducers";

const Reducers = combineReducers({
  counter: counterReducer,
});

export default Reducers;
