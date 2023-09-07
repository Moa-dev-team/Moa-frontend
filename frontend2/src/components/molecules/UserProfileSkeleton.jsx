import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from "../atoms/Container";

export default function UserProfileSkeleton() {
  return (
    <Container>
      <Skeleton />
    </Container>
  );
}
