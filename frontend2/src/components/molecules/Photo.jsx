import React from "react";

export default function Photo({ width, className, src, alt }) {
  return (
    <picture className={`${width} mx-auto`}>
      <img
        className={`w-inherit h-inherit object-cover ${className}`}
        src={src}
        alt={alt}
      />
    </picture>
  );
}
