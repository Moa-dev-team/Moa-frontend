import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Photo from "./Photo";
import Language from "./Language";

export default function UserCard({ memberData }) {
  const { name, imageUrl, skills, memberId } = memberData;
  const fillteredSkills = skills.length < 5 ? skills : skills.slice(0, 4);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${memberId}`);
  };
  return (
    <li
      className="flex flex-col justify-center items-center gap-4 w-56 h-72 border border-gray-300 rounded-md cursor-pointer"
      onClick={handleClick}
    >
      <Photo className="rounded-full" width="w-36" src={imageUrl} alt={name} />
      <span className="font-bold">{name}</span>
      <ul className="flex justify-center gap-2 w-[152px]">
        {fillteredSkills.map((skill) => (
          <Language key={uuidv4()} skill={skill} />
        ))}
      </ul>
    </li>
  );
}
