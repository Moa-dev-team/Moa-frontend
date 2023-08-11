import axios from "axios";
import { getCookie } from "../utils/cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 1000 * 5,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 1000 * 5,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use((config) => {
  const accessToken = getCookie("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${getCookie("accessToken")}`;
  }
  return config;
});

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);
