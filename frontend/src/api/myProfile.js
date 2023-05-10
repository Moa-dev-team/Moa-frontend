import axios from "axios";
import { getCookie } from "../util/cookie";
import { tokenRefresh } from "./auth";

export async function getUserData() {
  try {
    const response = await axios.get("/user/my-profile", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response.data;
  } catch (error) {
    const errorMessage = error.message;

    if (errorMessage === "Request failed with status code 401") {
      await tokenRefresh();
      const response = await axios.get("/user/my-profile", {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      });
      return response.data;
    }
  }
}
