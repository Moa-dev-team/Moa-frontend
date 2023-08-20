import React from "react";

export default function UserGrid({ userData }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
      {userData.map((page) =>
        page.members.map((member, index) => (
          <li className="h-56 bg-blue" key={index}>
            {member.name}
          </li>
        ))
      )}
    </ul>
  );
}
