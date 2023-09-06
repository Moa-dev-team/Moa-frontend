import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserCard({ userId, name, skills }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${userId}`);
  };
  return (
    <li className="w-64 h-72 border" onClick={handleClick}>
      <span>{name}</span>
      <br />
      <span>{skills.join(",")}</span>
    </li>
  );
}
