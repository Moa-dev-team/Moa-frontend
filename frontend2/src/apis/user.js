import { instance } from "./index";

export const getUsers = (cursor = null, limit = 20) => {
  const params = { cursor, limit };

  return instance.get("/global/members", { params });
};
