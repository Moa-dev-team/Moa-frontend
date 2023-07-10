import React from "react";

export default function Icon({ src, alt, width }) {
  return <img src={src} alt={alt} className={width} />;
}
