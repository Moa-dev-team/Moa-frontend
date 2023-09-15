import React, { Suspense } from "react";
import ProfileForm from "../components/templates/ProfileForm";

export default function ProfilePage() {
  return (
    <main className="flex px-4 py-12">
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileForm />
      </Suspense>
    </main>
  );
}
