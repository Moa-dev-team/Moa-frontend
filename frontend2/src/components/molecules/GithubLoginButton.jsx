import React from "react";
import githubLogo from "../../assets/githubLogo.png";
import Icon from "../atoms/Icon";

export default function GithubLoginButton() {
  const handleClick = () => {
    const REDIRECT_URL = "http://localhost:3000/oauth2/callback/github";
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URL}`
    );
  };

  return (
    <button
      className="flex items-center px-6 py-1 w-72 border rounded-lg bg-white duration-100 hover:brightness-95"
      onClick={handleClick}
    >
      <Icon src={githubLogo} alt="github login logo" width="w-9" />
      <span className="ml-4 text-lg font-semibold">GitHub 계정으로 로그인</span>
    </button>
  );
}
