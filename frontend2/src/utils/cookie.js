import { Cookies } from "react-cookie";

const cookies = new Cookies();

export function setCookie(name, value, option) {
  return cookies.set(name, value, { ...option });
}

export function getCookie(name) {
  return cookies.get(name);
}

export function removeCookie(name, option) {
  return cookies.remove(name, { ...option });
}
