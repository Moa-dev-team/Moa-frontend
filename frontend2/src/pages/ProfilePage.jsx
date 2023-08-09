import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../apis/profile";

export default function ProfilePage() {
  const { isLoading, error, data } = useQuery(["profile"], getUserProfile, {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(data);
  return <div>ProfilePage</div>;
}
