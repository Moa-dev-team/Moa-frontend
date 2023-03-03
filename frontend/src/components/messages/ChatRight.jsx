import React from "react";
import styles from './ChatRight.module.css'

export default function ChatRight({text, image, name, date}) {
  return (
    <React.Fragment>
      <div className={`${styles["date-right"]} text-muted small`}>{date.toLocaleString()}</div>
      <div className={`${styles["chat-message-right"]} pb-4`}>
        <div>
          <img
            src={image}
            className={styles["chat-image"]}
            alt="Chris Wood"
            width="40"
            height="40"
          />
          <div className="text-nowrap text-center">{name}</div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
            <div className="flex-shrink-1 bg-light rounded p-3 mr-3">
              {text}
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}
