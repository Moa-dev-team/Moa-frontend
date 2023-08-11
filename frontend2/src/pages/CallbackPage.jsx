import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loginRequest } from "../store/slices/userSlice";
import { setCookie } from "../utils/cookie";

export default function CallbackPage() {
  const { provider } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loginReq = async () => {
      const urlParams = new URL(window.location.href).searchParams;
      const code = urlParams.get("code");
      try {
        const response = await dispatch(loginRequest({ provider, code }));
        const accessToken = response.payload.accessToken.split(" ")[1];

        setCookie("accessToken", accessToken, { path: "/" });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    loginReq();
  }, [provider, dispatch, navigate]);

  return <div>Loading...</div>;
}
