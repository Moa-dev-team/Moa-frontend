import React, { Suspense } from "react";
import UserGridSkeleton from "../components/templates/UserGridSkeleton";
import UserGrid from "../components/templates/UserGrid";

export default function HomePage() {
  return (
    <main className="py-4">
      <Suspense fallback={<UserGridSkeleton />}>
        <UserGrid />
      </Suspense>
    </main>
  );
}
