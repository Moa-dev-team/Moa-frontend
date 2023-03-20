import React from "react";
import styles from "./ChatRight.module.css";
import NewLineText from "./NewLineText";

export default function ChatRight({ text, image, name, date }) {
  return (
    <React.Fragment>
      <div className={`${styles["date-right"]} text-muted small`}>
        {date.toLocaleString()}
      </div>
      <div className={`${styles["chat-message-right"]} pb-4`}>
        <div>
          <img
            src={image}
            className={styles["chat-image"]}
            alt="username"
            width="40"
            height="40"
          />
          <div className={styles.name}>{name}</div>
        </div>
        <div className="">
        <NewLineText text={text}/>
        </div>
      </div>
    </React.Fragment>
  );
}
