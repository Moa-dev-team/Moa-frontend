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

const FONTSIZE = {
  semibold: "font-semibold",
  bold: "font-bold",
};

export default function Button({
  children,
  type,
  margin,
  padding,
  height,
  textsize,
  fontsize,
  color,
  radius = "",
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      className={`${padding} ${margin} ${height} ${TEXTSIZE[textsize]} ${FONTSIZE[fontsize]} ${COLOR[color]} ${RADIUS[radius]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
