import instance from "./index";

export const login = (data) => {
  const { provider, code } = data;

  return instance.get(`/login/${provider}?code=${code}`);
};
