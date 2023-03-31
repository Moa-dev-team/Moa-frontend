import React from "react";
import styles from "./PostProfile.module.css";
import { useQuery } from "@tanstack/react-query";
import image from "../../assets/images/profile.png";
import CategoryBox from "./CategoryBox";
import PostSmallButton from "../buttons/PostSmallButton";

export default function PostAuthor({ userId, userType }) {
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
        <div className={styles["profile-box"]}>
          <div>
            <img className={styles.image} src={image} alt="profile" />
          </div>
          <div>{post_author && post_author.username}</div>
        </div>
        <div className={styles["tech-box"]}>
          <div className={styles["sub-title"]}>관심 분야 : </div>
          <div>
            <div className={styles["category-box"]}>
              {post_author &&
                post_author.interest.map((skill, index) => {
                  return <CategoryBox key={index} category={skill} />;
                })}
            </div>
          </div>
        </div>
        <div className={styles["tech-box"]}>
          <div className={styles["sub-title"]}>기술 스텍 : </div>
          <div>
            <div className={styles["category-box"]}>
              {post_author &&
                post_author.skills.map((skill, index) => {
                  return <CategoryBox key={index} category={skill} />;
                })}
            </div>
          </div>
        </div>
        <div className={styles["button-box"]}>
          {userType === 0 ? (
            <>
              <PostSmallButton text={"함께하기"} />
              <PostSmallButton text={"삭제하기"} backgroundColor={"#9DA194"} />
            </>
          ) : userType === 1 ? (
            <>
            <PostSmallButton text={"내보내기"} backgroundColor={"red"} />
            </>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}
