import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, InternalAPI } from "../common/constants";

export const loginUser = createAsyncThunk("/user/login", async (data) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(`${API_URL}${InternalAPI.LOGIN}`, requestOptions).then((res) =>
    res.json()
  );
});

export const registerUser = createAsyncThunk("/user/register", async (data) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(`${API_URL}${InternalAPI.REGISTER}`, requestOptions).then(
    (res) => res.json()
  );
});
