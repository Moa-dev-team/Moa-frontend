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
  try {
    const { provider, code } = data;
    const response = await login({ provider, code });

    return {
      accessToken: response.headers.authorization,
      expireTime: response.data.refreshTokenExpirationInMilliSeconds,
      firstLogin: response.data.firstLogin,
    };
  } catch (error) {
    const { data, status } = error.response;
    if (
      status === 400 &&
      data === "이미 [google] 으로 가입된 계정이 존재합니다."
    ) {
      window.location.replace("http://localhost:3000/login_fail");
    }
    console.log(error);
  }
});

export const logoutRequest = createAsyncThunk("user/logout", async () => {
  await logout();
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
