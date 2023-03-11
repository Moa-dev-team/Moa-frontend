import React from "react";
import LargeButton from "../buttons/LargeButton";
import styles from "./HomeArticle.module.css";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function HomeArticle({
  article: { title, text, path, position, image },
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };

  return (
    <article className={styles.article}>
      <Fade>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Fade>
      <div className={position === "left" ? styles.box : styles.box__right}>
        <div className={position === "left" ? styles.info : styles.info__right}>
          <h1 className={styles.title}>{title}</h1>
          <p className={position === "left" ? styles.text : styles.text__right}>
            {text}
          </p>
          <LargeButton text="자세히 보기" onClick={handleClick} />
        </div>
      </div>
    </article>
  );
}
