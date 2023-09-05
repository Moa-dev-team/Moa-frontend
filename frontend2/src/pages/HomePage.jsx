import React, { Suspense, useState } from "react";
import UserGridSkeleton from "../components/templates/UserGridSkeleton";
import UserGrid from "../components/templates/UserGrid";
import CategoryFilter from "../components/organisms/CategoryFilter";

const initialState = {
  frontend: [],
  backend: [],
  etc: [],
};

export default function HomePage() {
  const [categories, setCategories] = useState(initialState);

  const handleCategoryClick = (category, item) => {
    const isInclude = categories[category].includes(item);
    if (isInclude) {
      setCategories((prev) => ({
        ...prev,
        [category]: prev[category].filter((i) => i !== item),
      }));
    } else {
      setCategories((prev) => ({
        ...prev,
        [category]: [...prev[category], item],
      }));
    }
  };

  return (
    <main className="flex py-12">
      <CategoryFilter categories={categories} onClick={handleCategoryClick} />
      <Suspense fallback={<UserGridSkeleton />}>
        <UserGrid categories={categories} />
      </Suspense>
    </main>
  );
}
