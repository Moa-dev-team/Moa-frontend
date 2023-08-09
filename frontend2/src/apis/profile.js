import { getCookie } from "../utils/cookie";
import instance from "./index";

const accessToken = getCookie("accessToken");

instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

export const getUserProfile = () => {
  return instance.get("/user/profile");
};
