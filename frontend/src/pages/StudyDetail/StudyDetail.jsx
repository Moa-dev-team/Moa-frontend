import React from "react";
import { useParams } from "react-router-dom";

export default function StudyDetail() {
  const { studyId } = useParams();
  return <div>StudyDetail {studyId}</div>;
}
