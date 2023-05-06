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
    const { accessToken } = response.data;

    setCookie("accessToken", accessToken);
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

export async function logout() {
  try {
    const response = await axios.get("/auth/logout", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    removeCookie("accessToken");
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}
