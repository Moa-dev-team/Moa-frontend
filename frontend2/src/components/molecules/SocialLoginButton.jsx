import React from "react";
import Icon from "../atoms/Icon";

export default function SocialLoginButton({
  children,
  src,
  alt,
  width,
  onClick,
}) {
  return (
    <button
      className="flex items-center px-6 py-1 border rounded-lg bg-white duration-100 hover:brightness-95"
      onClick={onClick}
    >
      <Icon src={src} alt={alt} width={width} />
      <span className="ml-4 text-lg font-semibold">{children}</span>
    </button>
  );
}
