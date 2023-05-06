import axios from "axios";

export async function signUp(formData) {
  try {
    const response = await axios.post("/auth/register", {
      nickname: formData.nickname,
      email: formData.email,
      password: formData.password,
    });
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

export async function login(formData) {
  try {
    const response = await axios.post("/auth/login", formData);
    const { accessToken } = response.data;

    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}
