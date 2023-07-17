import instance from "./index";

export const login = (provider, code) => {
  return instance.get(`/login/${provider}?code=${code}`);
};
