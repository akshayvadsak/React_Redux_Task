import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./auth.thunk";

// basic example slice copied from the docs

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    credentials: { email: "", password: "" },
    email: "sada",
    status: null,
  },
  reducers: {
    setCredentialsToState: (state, { payload }) => {
      const key = Object.keys(payload)[0];
      state.credentials[key] = payload[key];
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      if (payload.status === true) {
        state.msg = payload.msg;
        state.data = payload.data;
        state.status = "success";
      }
      if (payload.status === false) {
        state.msg = payload.msg || "Network Error";
        state.status = "failed";
      }
    },
    [loginUser.rejected]: (state) => {
      state.status = "failed";
      state.msg = "Something went wrong. Please try again.";
    },
    [registerUser.pending]: (state) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      if (payload.status === true) {
        state.msg = payload.msg;
        state.data = payload.data;
        state.status = "success";
      }
      if (payload.status === false) {
        state.msg = payload.msg || "Network Error";
        state.status = "failed";
      }
    },
    [registerUser.rejected]: (state) => {
      state.status = "failed";
      state.msg = "Something went wrong. Please try again.";
    },
  },
});

const { actions, reducer } = authenticationSlice;

export const { setCredentialsToState } = actions;

export default reducer;
