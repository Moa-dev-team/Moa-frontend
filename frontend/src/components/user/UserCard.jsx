import React, { useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import CategoryTag from "../project/CategoryTag";
import styles from "./UserCard.module.css";

const categoryData = [
  {
    category: "프론트엔드",
    list: [
      { text: "HTML", color: "#e56026" },
      { text: "CSS", color: "#32a0d4" },
      { text: "JavaScript", color: "#ffd699" },
      { text: "TypeScript", color: "#99c0ff" },
      { text: "React", color: "#99eaff" },
      { text: "Vue", color: "#c3edab" },
      { text: "Svelte", color: "#ff99ad" },
      { text: "Nextjs", color: "#cbd3d6" },
    ],
  },
  {
    category: "백엔드",
    list: [
      { text: "Java", color: "#90ee90" },
      { text: "Spring", color: "#65c368" },
      { text: "Nodejs", color: "#487047" },
      { text: "Nestjs", color: "#ff7f8a" },
      { text: "Go", color: "#7fecff" },
      { text: "Kotlin", color: "#7f9bff" },
      { text: "Express", color: "#90ee90" },
      { text: "MySQL", color: "#4b72a8" },
      { text: "MongoDB", color: "#4b72a8" },
      { text: "Python", color: "#4b72a8" },
      { text: "Django", color: "#c7888d" },
      { text: "php", color: "#aad0ef" },
      { text: "GraphQL", color: "#e7b2cd" },
      { text: "Firebase", color: "#f29886" },
    ],
  },
  {
    category: "모바일",
    list: [
      { text: "Flutter", color: "#40cce2" },
      { text: "Swift", color: "#ffa07a" },
      { text: "Kotlin", color: "#7f9bff" },
      { text: "ReactNative", color: "#99eaff" },
      { text: "Unity", color: "#bdbdbd" },
    ],
  },
  {
    category: "기타",
    list: [
      { text: "AWS", color: "#ffa07a" },
      { text: "Kubernetes", color: "#7ad1ff" },
      { text: "Docker", color: "#96ebff" },
      { text: "Git", color: "#ff907a" },
      { text: "Figma", color: "#ee8bd1" },
      { text: "Zeplin", color: "#f2b787" },
      { text: "Jest", color: "#ce8e8d" },
      { text: "C", color: "#40cce2" },
    ],
  },
];

export default function UserCard({ user }) {
  const followBtn = useRef();
  const navigate = useNavigate();
  const { name, profile, field, skills, interest, following } = user;
  const [isFollow, setIsFollow] = useState(following);

  const handleClick = (e) => {
    if (e.currentTarget === followBtn.current) {
      setIsFollow((prev) => !prev);
      e.stopPropagation();
    } else {
      navigate(`/users/${user.id}`);
    }
  };
  // const handleFollow = () => {
  //   setIsFollow((prev) => !prev);
  // };

  return (
    <li className={styles.card} onClick={handleClick}>
      <div className={styles.follow}>
        <button
          className={`${styles.followBtn} ${isFollow ? styles.following : ""}`}
          onClick={handleClick}
          ref={followBtn}
        >
          <FaHeart />
        </button>
      </div>
      <div className={styles.info}>
        {profile ? (
          <img className={styles.profileImage} src={profile} alt={name} />
        ) : (
          <div className={styles.profileBox}></div>
        )}
        <div className={styles.nameAndField}>
          <p>{name}</p>
          <p>{field}</p>
        </div>
      </div>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <CategoryTag
            key={uuid()}
            category={skill}
            color={getColor(skill)}
            isSkill={true}
          />
        ))}
      </ul>
      <section className={styles.inner}>
        <p>기술 스택</p>
        <ul>
          {skills.map((skill) => (
            <CategoryTag
              key={uuid()}
              category={skill}
              color={getColor(skill)}
              isSkill={true}
            />
          ))}
        </ul>
        <p>관심 분야</p>
        <ul>
          {interest.map((interest) => (
            <CategoryTag
              key={uuid()}
              category={interest}
              color={getColor(interest)}
              isSkill={true}
            />
          ))}
        </ul>
      </section>
    </li>
  );
}

function getColor(t) {
  for (const category of categoryData) {
    for (const c of category.list) {
      if (c.text === t) {
        return c.color;
      }
    }
  }
}
