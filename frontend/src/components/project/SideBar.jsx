import React from "react";
import styles from "./SideBar.module.css";
import SideBarList from "./SideBarList";

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
      {categories.map((categoryItems, index) => (
        <SideBarList
          key={index}
          categoryItems={categoryItems}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
