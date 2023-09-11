import { v4 as uuidv4 } from "uuid";

export const CATEGORIES = [
  { value: "frontend", label: "프론트엔드", isdisabled: true },
  { value: "React", label: "React" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "backend", label: "백엔드", isdisabled: true },
  { value: "Java", label: "Java" },
  { value: "Spring", label: "Spring" },
  { value: "etc", label: "기타", isdisabled: true },
  { value: "Python", label: "Python" },
];

export const CATEGORIE_FILTERS = [
  {
    id: uuidv4(),
    label: "프론트엔드",
    category: "frontend",
    languages: [
      { id: uuidv4(), value: "React" },
      { id: uuidv4(), value: "JavaScript" },
    ],
  },
  {
    id: uuidv4(),
    label: "백엔드",
    category: "backend",
    languages: [
      { id: uuidv4(), value: "Java" },
      { id: uuidv4(), value: "Spring" },
    ],
  },
  {
    id: uuidv4(),
    label: "기타",
    category: "etc",
    languages: [{ id: uuidv4(), value: "Python" }],
  },
];

export const LANGUAGE_LOGO = {
  React: "./images/react.png",
  JavaScript: "./images/javascript.png",
  Spring: "./images/spring.png",
  Java: "./images/java.png",
  Python: "./images/python.png",
};

export const JOBS = [
  { label: "백엔드", value: "Backend" },
  { label: "프론트엔드", value: "Frontend" },
  { label: "학생", value: "Student" },
];

export const JOB = {
  Student: "학생",
  Backend: "백엔드",
  Frontend: "프론트엔드",
};
