import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import googleLogo from "../../assets/googleLogo.webp";
import Icon from "../atoms/Icon";
import { useNavigate } from "react-router-dom";

export default function GoogleLoginButton() {
  const navigate = useNavigate();
  const handleClick = useGoogleLogin({
    onSuccess: (codeResponse) => {
      navigate(`/oauth2/callback/google?code=${codeResponse.code}`);
    },
    flow: "auth-code",
  });

  return (
    <button
      className="flex items-center px-6 py-1 w-72 border rounded-lg bg-white duration-100 hover:brightness-95"
      onClick={handleClick}
    >
      <Icon src={googleLogo} alt="google login logo" width="w-9" />
      <span className="ml-4 text-lg font-semibold">Google 계정으로 로그인</span>
    </button>
  );
}
