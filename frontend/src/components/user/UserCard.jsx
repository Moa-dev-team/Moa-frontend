import React from "react";
import { FaHeart } from "react-icons/fa";
import { v4 as uuid } from "uuid";

export default function UserCard({ user }) {
  const { name, profile, field, skills, interest, following } = user;

  return (
    <li>
      <button>
        <FaHeart />
      </button>
      <div>
        {profile ? <img src={profile} alt={name} /> : <div></div>}
        <p>{name}</p>
        <p>{field}</p>
      </div>
      <ul>
        {skills.map((skill) => (
          <li key={uuid()}>{skill}</li>
        ))}
      </ul>
    </li>
  );
}
