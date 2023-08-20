import React, { Suspense, useEffect, useRef } from "react";
import { getUsers } from "../apis/user";
import { useInfiniteQuery } from "@tanstack/react-query";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Loader from "../components/molecules/Loader";
import UserGrid from "../components/templates/UserGrid";

export default function HomePage() {
  const bottomObserver = useRef(null);
  const { fetchNextPage, isFetchingNextPage, hasNextPage, data, error } =
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

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <main className="py-4">
      <UserGrid userData={data.pages} />
      <div ref={bottomObserver} className="flex justify-center items-center">
        {isFetchingNextPage && <Loader size={50} />}
      </div>
    </main>
  );
}
