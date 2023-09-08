import React from "react";
import { CATEGORIE_FILTERS } from "../../utils/constant";
import CategoryGroup from "../molecules/CategoryGroup";

export default function CategoryFilter({ categories, onClick }) {
  return (
    <aside className="w-56 px-5 shrink-0">
      <ul>
        {CATEGORIE_FILTERS.map((category) => (
          <CategoryGroup
            key={category.id}
            category={category.category}
            label={category.label}
            languages={category.languages}
            filter={categories[category.category]}
            onClick={onClick}
          />
        ))}
      </ul>
    </aside>
  );
}
