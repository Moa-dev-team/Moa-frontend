import React from "react";
import styles from "./PostAuthor.module.css";
import { useQuery } from "@tanstack/react-query";
import image from "../../assets/images/profile.png";
import CategoryBox from "./CategoryBox";

export default function PostAuthor({ userId }) {
  const {
    isLoading,
    error,
    data: post_author,
  } = useQuery(["post_author"], async () =>
    fetch("/data/post_author.json").then((res) => res.json())
  );

  return (
    <React.Fragment>
      <div className={`${styles.box}`}>
        <div className={styles.profile}>
          <div>
            <img className={styles.image} src={image} alt="profile" />
          </div>
          <div>{post_author && post_author.username}</div>
        </div>
        <div className="d-flex">
          <div className={styles["sub-title"]}>관심 분야</div>
          <div >
              <div className={styles["category-box"]}>
                {post_author &&
                  post_author.interest.map((skill) => {
                    return <CategoryBox category={skill} />;
                  })}
              </div>
          </div>
        </div>
        <div className="d-flex">
          <div className={styles["sub-title"]}>기술 스텍</div>
          <div>
              <div className={styles["category-box"]}>
                {post_author &&
                  post_author.skills.map((skill) => {
                    return <CategoryBox category={skill} />;
                  })}
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
