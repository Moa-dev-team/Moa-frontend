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
      <div className={position === "left" ? styles.box : styles.box__right}>
        <div className={position === "left" ? styles.info : styles.info__right}>
          <h1 className={styles.title}>{title}</h1>
          <pre
            className={position === "left" ? styles.text : styles.text__right}
          >
            {text}
          </pre>
          <LargeButton text="자세히 보기" onClick={handleClick} />
        </div>
      </div>
    </article>
  );
}
