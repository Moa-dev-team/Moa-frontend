import { authInstance, instance } from "./index";

export const login = (data) => {
  const { provider, code } = data;

  return instance.get(`/auth/login/${provider}?code=${code}`);
};

export const refresh = () => {
  return instance.get("/auth/refresh");
};

export const logout = () => {
  return authInstance.get("/auth/logout");
};
