import React from "react";
import LargeButton from "../buttons/LargeButton";
import styles from "./HomeArticle.module.css";
import { useNavigate } from "react-router-dom";

export default function HomeArticle({
  article: { title, text, path, position, image },
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };

  return (
    <article
      className={styles.article}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className={styles.title}>{title}</h1>
      <pre className={styles.text}>{text}</pre>
      <LargeButton text="자세히 보기" onClick={handleClick} />
    </article>
  );
}
