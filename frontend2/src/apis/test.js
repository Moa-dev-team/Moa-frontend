import axios from "axios";

export const test = () => {
  return axios.get("/test");
};
