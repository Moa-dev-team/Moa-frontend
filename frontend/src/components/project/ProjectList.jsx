import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";

export default function ProjectList({ categories }) {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery(["projects"], async () =>
    fetch("/data/projects.json").then((res) => res.json())
  );

  return (
    <>
      {isLoading && <p>isLoading...</p>}
      {error && <p>something is wrong!</p>}
      {projects && (
        <ul className={styles.list}>
          {filterProjects(categories, projects.data).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      )}
    </>
  );
}

function filterProjects(categories, projects) {
  if (categories.length === 0) {
    return projects;
  }
  return projects.filter((project) => categories.includes(project.skill));
}
