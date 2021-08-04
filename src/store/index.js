import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import user from "./user";
import loading from "./loading";

const reducer = combineReducers({
  user,
  loading,
});

const store = configureStore({
  reducer,
});

export default store;
