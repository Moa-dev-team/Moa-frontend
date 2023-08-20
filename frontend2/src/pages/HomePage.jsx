import React, { useEffect, useRef } from "react";
import { getUsers } from "../apis/user";
import { useInfiniteQuery } from "@tanstack/react-query";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function HomePage() {
  const bottomObserver = useRef(null);
  const { fetchNextPage, hasNextPage, data, error, isLoading } =
    useInfiniteQuery(
      ["userList"],
      ({ pageParam = null }) => getUsers(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );
  const [observe, unobserve] = useIntersectionObserver(fetchNextPage);

  useEffect(() => {
    if (!hasNextPage || !bottomObserver) return;
    const observer = bottomObserver.current;
    observe(observer);

    return () => unobserve(observer);
  }, [bottomObserver, hasNextPage, observe, unobserve]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <main className="py-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4">
        {data.pages.map((page) =>
          page.members.map((member, index) => (
            <li className="h-56 bg-blue" key={index}>
              {member.name}
            </li>
          ))
        )}
      </ul>
      <div ref={bottomObserver}></div>
    </main>
  );
}
