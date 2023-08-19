import React, { useCallback, useEffect, useRef, useState } from "react";
import { getUsers } from "../apis/user";

export default function HomePage() {
  const bottomObserver = useRef(null);
  const [userList, setUserList] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasNextUser, setHasNextUser] = useState(true);

  const fetchUserData = async (cursor) => {
    const response = await getUsers(cursor);
    const { members, nextCursor } = response.data;
    if (members.length === 0) {
      setHasNextUser(false);
      return;
    }
    setUserList((prev) => [...prev, ...members]);
    setCursor(nextCursor);
  };

  useEffect(() => {
    fetchUserData(null);
  }, []);

  const handleObserver = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextUser) {
          fetchUserData(cursor);
        }
      });
    },
    [cursor, hasNextUser]
  );

  useEffect(() => {
    if (userList.length === 0 || !bottomObserver) return;
    const observer = bottomObserver.current;
    const io = new IntersectionObserver(handleObserver, { threshold: 1 });
    io.observe(observer);

    return () => io && io.unobserve(observer);
  }, [handleObserver, bottomObserver, userList.length]);

  return (
    <main className="py-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4">
        {userList.map((user, index) => (
          <li className="h-56 bg-blue" key={index}>
            {user.name}
          </li>
        ))}
      </ul>
      <div ref={bottomObserver}></div>
    </main>
  );
}
