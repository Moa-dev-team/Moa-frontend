import React, { Suspense } from "react";
import ProfileForm from "../components/templates/ProfileForm";

export default function ProfilePage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileForm />
      </Suspense>
    </main>
  );
}
