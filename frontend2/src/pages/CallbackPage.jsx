import React from "react";

export default function CallbackPage() {
  const urlParams = new URL(window.location.href).searchParams;
  const code = urlParams.get("code");

  return <div>{code}</div>;
}
