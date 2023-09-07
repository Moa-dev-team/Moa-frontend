import React from "react";
import UserCard from "../molecules/UserCard";

export default function UserList({ userData }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center mb-4">
      {userData.map((page) =>
        page.members.map((member) => {
          const { memberId, name, skills } = member;
          return (
            <UserCard
              key={memberId}
              userId={memberId}
              name={name}
              skills={skills}
            />
          );
        })
      )}
    </ul>
  );
}
