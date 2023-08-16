import { authInstance } from "./index";

export const getUserProfile = () => {
  return authInstance.get("/user/profile");
};
