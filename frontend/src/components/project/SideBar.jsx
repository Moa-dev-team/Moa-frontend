import React from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";

const categories = [
  {
    category: "프론트엔드",
    list: ["JavaScript", "TypeScript", "React", "Vue", "Svelte", "Nextjs"],
  },
  {
    category: "백엔드",
    list: [
      "Java",
      "Spring",
      "Nodejs",
      "Nestjs",
      "Go",
      "Kotlin",
      "Express",
      "MySQL",
      "MongoDB",
      "Python",
      "Django",
      "php",
      "GraphQL",
      "Firebase",
    ],
  },
  {
    category: "모바일",
    list: ["Flutter", "Swift", "Kotlin", "ReactNative", "Unity"],
  },
  {
    category: "기타",
    list: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Git",
      "Figma",
      "Zeplin",
      "Jest",
      "C",
    ],
  },
];

export default function SideBar({ onClick }) {
  return (
    <ul className={styles.category}>
      {categories.map((c, index) => (
        <li className={styles.list} key={index}>
          <p className={styles.category__name}>{c.category}</p>
          <ul>
            {c.list.map((item, index) => (
              <SideBarItem key={index} item={item} onClick={onClick} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
