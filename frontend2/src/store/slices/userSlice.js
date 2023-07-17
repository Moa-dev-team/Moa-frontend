import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/cookie";
import { login } from "../../apis/auth";

const initialState = {
  isLoggedIn: Boolean(getCookie("accessToken")),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state) => {
      state.isLoggedIn = true;
    });
  },
});

export const loginRequest = createAsyncThunk("user/login", async (data) => {
  const { provider, code } = data;
  const response = await login({ provider, code });

  return {
    accessToken: response.headers.authorization,
  };
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
