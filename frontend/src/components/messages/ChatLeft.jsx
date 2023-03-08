import React from "react";
import styles from "./ChatLeft.module.css";

export default function ChatLeft({text, image, name, date}) {
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
            alt="username"
            width="40"
            height="40"
          />
          <div className="text-nowrap text-center">{name}</div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className={`flex-shrink-1 bg-light rounded p-3 ml-3 mb-3 ${styles.text}`}>{text}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
