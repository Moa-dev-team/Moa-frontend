import React from "react";
import Icon from "../atoms/Icon";
import naverLogo from "../../assets/naverLogo.png";

export default function NaverLoginButton() {
  const handleClick = () => {
    const REDIRECT_URL = "http://localhost:3000/oauth2/callback/naver";
    const STATE_STRING = "random_string";
    window.location.assign(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${REDIRECT_URL}`
    );
  };

  return (
    <button
      className="flex items-center px-6 py-1 w-72 border rounded-lg bg-white duration-100 hover:brightness-95"
      onClick={handleClick}
    >
      <Icon src={naverLogo} alt="naver login logo" width="w-9" />
      <span className="ml-4 text-lg font-semibold">Naver 계정으로 로그인</span>
    </button>
  );
}
