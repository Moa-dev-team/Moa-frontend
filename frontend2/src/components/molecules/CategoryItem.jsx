import React from "react";
import CheckBox from "./CheckBox";

export default function CategoryItem({ category, language, checked, onClick }) {
  return (
    <li className="pb-2">
      <CheckBox
        id={language}
        checked={checked}
        onClick={() => onClick(category, language)}
      >
        {language}
      </CheckBox>
    </li>
  );
}
