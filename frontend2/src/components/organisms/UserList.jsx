import React from "react";

export default function UserList({ userData }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center mb-4">
      {userData.map((page) =>
        page.members.map((member) => (
          <li className="w-64 h-72 border" key={member.memberId}>
            <span>{member.name}</span>
            <br />
            <span>{member.skills.join(",")}</span>
          </li>
        ))
      )}
    </ul>
  );
}
