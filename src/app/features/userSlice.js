import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state, { payload }) => {
      state.user = null;
    },
    isAuthReady: (state, { payload }) => {
      state.isAuth = true;
    },
  },
});

export const { login, logout, isAuthReady } = userSlice.actions;
export default userSlice.reducer;
