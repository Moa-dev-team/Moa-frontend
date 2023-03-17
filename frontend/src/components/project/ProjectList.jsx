import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";

export default function ProjectList({ categories, recruitment }) {
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
          {filterProjects(categories, projects.data, recruitment).map(
            (project) => (
              <ProjectCard key={project.id} project={project} />
            )
          )}
        </ul>
      )}
    </>
  );
}

function filterProjects(categories, projects, recruitment) {
  if (categories.length === 0) {
    return filterRecruitment(recruitment, projects);
  }
  const filterdProjects = filterRecruitment(recruitment, projects);
  return filterdProjects.filter((project) =>
    categories.includes(project.skill)
  );
}

function filterRecruitment(recruitment, projects) {
  if (recruitment) {
    return projects.filter((project) => project.recruitment);
  }
  return projects;
}
