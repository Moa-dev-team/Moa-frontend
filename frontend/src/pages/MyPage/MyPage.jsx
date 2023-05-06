import React from "react";
import { getUserData } from "../../api/myProfile";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../contexts/AuthContext";
import { decodeToken } from "../../util/cookie";

export default function MyPage() {
  const { isUser } = useAuth();
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery(["myProfile", decodeToken(isUser).memberId], getUserData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return <div>{userData.nickname}</div>;
}
