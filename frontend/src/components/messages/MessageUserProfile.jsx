import React from "react";
import styles from "./MessageUserProfile.module.css";

export default function MessageUserProfile({
  profileImage,
  username,
  job,
  count,
  isSelected,
}) {
  return (
    <React.Fragment>
      <div className={styles.box}>
        <img
          src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/944/eabb97e854d5e5927a69d311701cc211_res.jpeg"
          alt="userprofile"
          className={styles.image}
        />
        <div className={styles.userData}>
            <p className={styles.username}>안호성</p>
            <p className={styles.job}>프론트엔드</p>
        </div>
        <div className={styles.messageStatusBox}>
            <button>asd</button>
        </div>
      </div>
    </React.Fragment>
  );
}
