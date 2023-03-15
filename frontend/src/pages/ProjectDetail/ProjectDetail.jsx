import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { projectId } = useParams();

  return <div>ProjectDetail {projectId}</div>;
}
