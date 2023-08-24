import { authInstance } from "./index";

export const getUserProfile = () => {
  return authInstance.get("/user/profile");
};

export const setUserProfile = (data) => {
  return authInstance.post("/user/profile/update", data);
};
