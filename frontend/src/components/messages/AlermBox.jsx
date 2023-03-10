import React from "react";
import styles from "./AlermBox.module.css";
import { HiBell } from "react-icons/hi"

export default function AlermBox({ count, isSelected, onClick }) {
  return (
    <React.Fragment>
      <div
        className={`${styles.box} ${isSelected && styles.isSelected}`}
        onClick={onClick}
      >
        <HiBell className={styles.alert}/>
        <div className="d-flex">
          
          <div className={styles.userData}>
            알림 보기
          </div>
        </div>
        <div className={styles.bedgeBox}>
          <div className="badge bg-primary">{count > 0 ? `+${count}` : ""}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
