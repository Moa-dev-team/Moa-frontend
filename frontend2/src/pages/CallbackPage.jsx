import React, { useEffect } from "react";
import { loginRequest } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { setCookie } from "../utils/cookie";

export default function CallbackPage() {
  const dispatch = useDispatch();
  const urlParams = new URL(window.location.href).searchParams;
  const provider = urlParams.get("provider");
  const code = urlParams.get("code");

  useEffect(() => {
    const loginReq = async () => {
      try {
        const response = dispatch(loginRequest({ provider, code }));
        const accessToken = response.payload.accessToken;
        setCookie("accessToken", accessToken);
      } catch (error) {
        console.log(error);
      }
    };
    loginReq();
  }, [provider, code, dispatch]);

  return <div></div>;
}
