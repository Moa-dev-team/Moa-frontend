import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loginRequest } from "../store/slices/userSlice";
import { setCookie } from "../utils/cookie";
import Loader from "../components/molecules/Loader";

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
        const { accessToken, expireTime, firstLogin } = response.payload;
        const expires = new Date(expireTime);

        setCookie("accessToken", accessToken.split(" ")[1], {
          path: "/",
          expires,
        });
        if (firstLogin) {
          navigate("/profile");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    loginReq();
  }, [provider, dispatch, navigate]);

  return (
    <main className="flex justify-center items-center w-full h-full">
      <Loader size={50} />
    </main>
  );
}
