import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./login.slice";

const allReducers = combineReducers({
  authentication: authenticationSlice,
});

const store = configureStore({ reducer: allReducers, devTools: true });

export default store;
