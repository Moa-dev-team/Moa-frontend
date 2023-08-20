import React from "react";
import { Oval } from "react-loader-spinner";

export default function Loader({ size }) {
  return (
    <Oval
      height={size}
      width={size}
      color="#2557f5"
      ariaLabel="oval-loading"
      secondaryColor="#c0c0c0"
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  );
}
