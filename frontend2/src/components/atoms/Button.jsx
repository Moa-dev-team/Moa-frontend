import React from "react";

const COLOR = {
  transparent: "bg-transparent text-black",
  blue: "bg-blue text-white",
  black: "bg-black text-white",
};

const RADIUS = {
  sm: "rounded-md",
  lg: "rounded-full",
};

const TEXTSIZE = {
  sm: "text-sm",
  lg: "text-lg",
};

const FONTWEIGHT = {
  semibold: "font-semibold",
  bold: "font-bold",
};

export default function Button({
  children,
  className,
  type,
  textsize,
  fontWeight,
  color,
  radius = "",
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      className={`${className} ${TEXTSIZE[textsize]} ${FONTWEIGHT[fontWeight]} ${COLOR[color]} ${RADIUS[radius]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
