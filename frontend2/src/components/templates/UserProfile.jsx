import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserProfileById } from "../../apis/profile";
import Photo from "../molecules/Photo";
import { JOB } from "../../utils/constant";

export default function UserProfile({ userId }) {
  const {
    error,
    data: {
      data: { email, imageUrl, name, skills, job },
    },
  } = useQuery(["profile", userId], () => getUserProfileById(userId));

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <Photo width="w-56" src={imageUrl} alt={`${name}'s profile`} />
      <p>{email}</p>
      <p>{name}</p>
      <p>{JOB[job]}</p>
      <p>{skills.join(",")}</p>
    </div>
  );
}
