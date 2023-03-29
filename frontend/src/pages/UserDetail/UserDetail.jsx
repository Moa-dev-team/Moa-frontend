import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { userId } = useParams();

  return <div>UserDetail {userId}</div>;
}
