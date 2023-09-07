import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function UserGridSkeleton() {
  return (
    <Skeleton
      count={10}
      inline={true}
      containerClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4"
      className="h-56"
    />
  );
}
