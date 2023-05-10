import React from "react";
import { getUserData } from "../../api/myProfile";
import { useQuery } from "@tanstack/react-query";

export default function MyPage() {
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery(["myProfile"], getUserData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return <div>{userData.nickname}</div>;
}
