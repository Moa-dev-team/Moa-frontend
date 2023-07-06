import axios from "axios";
import { getCookie, removeCookie, setCookie } from "../util/cookie";

export async function signUp(formData) {
  try {
    const response = await axios.post("/auth/register", {
      nickname: formData.nickname,
      email: formData.email,
      password: formData.password,
    });
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

export async function login(formData) {
  try {
    const response = await axios.post("/auth/login", formData);
    setToken(response);
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

export async function logout() {
  try {
    const response = await axios.get("/auth/logout");
    removeCookie("accessToken");
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

export async function tokenRefresh() {
  try {
    const response = await axios.get("/auth/refresh", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    setToken(response);
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

export async function getToken(provider, code) {
  try {
    const response = await axios.get(`auth/login/${provider}?code=${code}`);
    setToken(response);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log("asdf");
  }
}

function setToken(response) {
  const { accessToken, refreshTokenExpirationInMilliSeconds } = response.data;

  setCookie("accessToken", accessToken, {
    expires: new Date(refreshTokenExpirationInMilliSeconds - 10 * 60 * 1000),
  });
}
