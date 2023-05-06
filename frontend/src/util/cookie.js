import { Cookies } from "react-cookie";
import jwtDecode from "jwt-decode";

const cookies = new Cookies();

export function setCookie(name, value, option) {
  return cookies.set(name, value, { ...option });
}

export function getCookie(name) {
  return cookies.get(name);
}

export function removeCookie(name) {
  return cookies.remove(name);
}

export function decodeToken(token) {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error) {
    console.error(error);
    return null;
  }
}
