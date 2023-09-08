import React from "react";
import Photo from "./Photo";
import { LANGUAGE_LOGO } from "../../utils/constant";

export default function Language({ skill }) {
  return (
    <li>
      <Photo
        className="rounded-full"
        width="w-8"
        src={LANGUAGE_LOGO[skill]}
        alt={skill}
      />
    </li>
  );
}
