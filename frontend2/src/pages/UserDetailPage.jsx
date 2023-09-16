import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/templates/UserProfile";
import UserProfileSkeleton from "../components/molecules/UserProfileSkeleton";

export default function UserDetailPage() {
  const { userId } = useParams();

  return (
    <main className="flex gap-16 mb-6 px-4 py-12">
      <Suspense fallback={<UserProfileSkeleton />}>
        <UserProfile userId={userId} />
      </Suspense>
    </main>
  );
}
