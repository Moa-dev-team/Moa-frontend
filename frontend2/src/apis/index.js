import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";
import { refresh } from "./auth";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 1000 * 5,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      response: { status },
    } = error;

    if (status === 401) {
      window.location.replace("/login");
      return;
    }
    return Promise.reject(error);
  }
);

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
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      const originRequest = config;
      const response = await refresh();

      if (response.status === 200) {
        const accessToken = response.headers.authorization.split(" ")[1];
        const expires = new Date(
          response.data.refreshTokenExpirationInMilliSeconds
        );

        setCookie("accessToken", accessToken, { path: "/", expires });
        originRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originRequest);
      }
      return Promise.reject(error);
    }
  }
);
