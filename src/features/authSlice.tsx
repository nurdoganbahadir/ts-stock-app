import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: "",
    username: "",
  },
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.user.username;
    },
    registerSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.data.username;
    },
    logoutSuccess: (state) => {
      state.token = "";
      state.username = "";
    },
  },
});

export const { loginSuccess, registerSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
