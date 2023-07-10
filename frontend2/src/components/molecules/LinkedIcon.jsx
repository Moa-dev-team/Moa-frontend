import React from "react";
import { Link } from "react-router-dom";
import Icon from "../atoms/Icon";

export default function LinkedIcon({ children, path, src, alt, width }) {
  return (
    <Link to={path} className="flex items-center">
      <Icon src={src} alt={alt} width={width} />
      {children}
    </Link>
  );
}
