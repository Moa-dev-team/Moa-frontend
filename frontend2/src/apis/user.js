import { instance } from "./index";

export const getUsers = async (categories, cursor = null, limit = 20) => {
  const params = { cursor, limit };
  const response = await instance.post("/global/members", categories, {
    params,
  });

  return response.data;
};
