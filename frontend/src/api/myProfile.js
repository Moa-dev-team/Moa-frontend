import axios from "axios";
import { getCookie } from "../util/cookie";

export async function getUserData() {
  try {
    const response = await axios.get("/user/my-profile", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}
