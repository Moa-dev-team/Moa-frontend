import React from "react";

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

export default function SideBar() {
  return (
    <ul>
      {categories.map((c, index) => (
        <li key={index}>
          <p>{c.category}</p>
          <ul>
            {c.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
