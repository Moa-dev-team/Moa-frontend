import React from "react";
import UserCard from "../molecules/UserCard";

export default function UserList({ userData }) {
  return (
    <ul className="flex flex-wrap justify-center gap-3 mb-4 px-7">
      {userData.map((page) =>
        page.members.map((member) => (
          <UserCard key={member.memberId} memberData={member} />
        ))
      )}
    </ul>
  );
}
