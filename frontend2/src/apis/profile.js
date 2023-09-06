import { authInstance, instance } from "./index";

export const getUserProfile = () => {
  return authInstance.get("/user/profile");
};

export const getUserProfileById = (id) => {
  const params = { memberId: id };
  return instance.get("/global/profile", { params });
};

export const setUserProfile = (data) => {
  return authInstance.post("/user/profile/update", data);
};
