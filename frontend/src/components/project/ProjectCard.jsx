import React from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  project: {
    title,
    description,
    field,
    skill,
    dueDate,
    writer,
    profile,
    recruitment,
  },
}) {
  return (
    <li className={styles.card}>
      {!recruitment && <div className={styles.closed}></div>}
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{dueDate}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.info}>
        <div className={styles.qualification}>
          <p>모집분야 : {field}</p>
          <p>모집기술 : {skill}</p>
        </div>
        <div className={styles.profile}>
          {profile ? (
            <img className={styles.image} src={profile} alt={writer} />
          ) : (
            <div className={styles.empty}></div>
          )}
          <p>{writer}</p>
        </div>
      </div>
    </li>
  );
}
