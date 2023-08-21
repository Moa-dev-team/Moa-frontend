import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../apis/profile";
import InputGroup from "../components/molecules/InputGroup";
import Photo from "../components/molecules/Photo";

export default function ProfilePage() {
  const { isLoading, error, data } = useQuery(["profile"], getUserProfile);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <main>
      <Photo
        width="w-56"
        className="rounded-full"
        src={data.data.imageUrl}
        alt={data.data.name}
      />
      <InputGroup value={data.data.name} disabled>
        이름
      </InputGroup>
      <InputGroup value={data.data.email} disabled>
        이메일
      </InputGroup>
    </main>
  );
}
