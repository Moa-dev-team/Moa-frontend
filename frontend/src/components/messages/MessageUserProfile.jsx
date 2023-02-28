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
      <div className={`${styles.box} ${isSelected && styles.isSelected}`}>
        <img
        // profileImage 가 있다면 src에 prifileImage 를 넣는다.
          src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/944/eabb97e854d5e5927a69d311701cc211_res.jpeg"
          alt="userprofile"
          className={styles.image}
        />
        <div className={styles.userData}>
            <p className={styles.username}>{username}</p>
            <p className={styles.job}>{job}</p>
        </div>
        <div className={styles.messageStatusBox}>
            <button>asd</button>
        </div>
      </div>
    </React.Fragment>
  );
}
