import { instance } from "./index";

export const getUsers = async (cursor = null, limit = 20) => {
  const params = { cursor, limit };
  const response = await instance.post("/global/members", { params });

  return response.data;
};
