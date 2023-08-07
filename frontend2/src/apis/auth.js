import instance from "./index";

export const login = (data) => {
  const { provider, code } = data;

  return instance.get(`/auth/login/${provider}?code=${code}`);
};
