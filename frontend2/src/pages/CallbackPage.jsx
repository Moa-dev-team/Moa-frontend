import React, { useEffect } from "react";
import { login } from "../apis/auth";

export default function CallbackPage() {
  const urlParams = new URL(window.location.href).searchParams;
  const provider = urlParams.get("provider");
  const code = urlParams.get("code");

  useEffect(() => {
    const loginRequest = async () => {
      const response = await login(provider, code);
      console.log(response);
    };
    loginRequest();
  });

  return <div></div>;
}
