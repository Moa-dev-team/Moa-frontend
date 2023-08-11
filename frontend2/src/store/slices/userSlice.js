import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/cookie";
import { login, logout } from "../../apis/auth";

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
    builder.addCase(logoutRequest.fulfilled, (state) => {
      state.isLoggedIn = false;
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

export const logoutRequest = createAsyncThunk("user/logout", async () => {
  await logout();
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
