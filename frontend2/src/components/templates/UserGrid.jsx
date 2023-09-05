import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { getUsers } from "../../apis/user";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import UserList from "../organisms/UserList";
import Loader from "../molecules/Loader";

export default function UserGrid({ categories }) {
  const bottomObserver = useRef(null);
  const { fetchNextPage, isFetchingNextPage, hasNextPage, data, error } =
    useInfiniteQuery(
      ["userList", categories],
      ({ pageParam = null }) => {
        const count = getCategoryCount(categories);
        return getUsers(
          count === 0 ? {} : { categories: getAllCategories(categories) },
          pageParam,
          20
        );
      },
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
    <section className="grow">
      <UserList userData={data.pages} />
      <div ref={bottomObserver} className="flex justify-center items-center">
        {isFetchingNextPage && <Loader size={50} />}
      </div>
    </section>
  );
}

const getCategoryCount = (categories) =>
  Object.values(categories).reduce((prev, cur) => prev + cur.length, 0);

const getAllCategories = (categories) =>
  [].concat(...Object.values(categories));
