import React from "react";
import styles from "./ChatLeft.module.css";
import NewLineText from "./NewLineText";

export default function ChatLeft({text, image, name, date, isPost}) {
  return (
    <React.Fragment>
      <div className={`${styles["date-left"]} text-muted small`}>
        {date.toLocaleString()}
      </div>
      <div className={`${styles["chat-message-left"]} pb-4`}>
        <div>
          <img
            src={image}
            className={styles["chat-image"]}
            alt="profile"
            width="40"
            height="40"
          />
          <div className={styles.name}>{name}</div>
        </div>
        <div className={isPost && styles.text}>
          <NewLineText text={text}/>
        </div>
      </div>
    </React.Fragment>
  );
}
