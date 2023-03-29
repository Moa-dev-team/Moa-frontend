import { useQuery } from "@tanstack/react-query";
import React from "react";
import UserCard from "./UserCard";
import styles from "./UserList.module.css";

export default function UserList({ categories }) {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery(["users"], async () =>
    fetch("/data/users.json").then((res) => res.json())
  );

  return (
    <>
      {isLoading && <p>isLoading...</p>}
      {error && <p>something is wrong!</p>}
      {users && (
        <ul className={styles.list}>
          {filterUsers(categories, users.data).map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
}

function filterUsers(categories, users) {
  return users.filter(
    (user) =>
      categories.length === 0 || checkCommonCategory(user.skills, categories)
  );
}

function checkCommonCategory(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      return true;
    }
  }
  return false;
}
