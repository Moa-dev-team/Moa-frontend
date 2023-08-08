import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 1000 * 5,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
