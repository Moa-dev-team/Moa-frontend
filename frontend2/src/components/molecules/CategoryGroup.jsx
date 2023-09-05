import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryGroup({
  category,
  label,
  languages,
  filter,
  onClick,
}) {
  return (
    <li className="pb-2">
      <span className="font-semibold text-lg">{label}</span>
      <ul className="py-4 pl-6">
        {languages.map((language) => (
          <CategoryItem
            key={language.id}
            category={category}
            language={language.value}
            checked={filter.includes(language.value)}
            onClick={onClick}
          />
        ))}
      </ul>
    </li>
  );
}
