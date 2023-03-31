import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./ProjectDetail.module.css";
import SmallButton from "../../components/buttons/SmallButton";
import PostProfile from "../../components/projectDetail/PostProfile";
import CategoryBox from "../../components/projectDetail/CategoryBox";
import PostSendMessageForm from "../../components/projectDetail/PostSendMessageForm";
import ChatLeft from "../../components/messages/ChatLeft";
import image from "../../assets/images/profile.png";
const comments = [
  { id: 0, name : "안호성", text: "안녕하세요", profile: image, date: new Date("2020-01-01") },
  {
    id: 2,
    name : "윤강", text: "안녕못한데?",
    profile: image,
    date: new Date("2020-01-02"),
  }
];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [PostComment, setPostComment] = useState(comments);

  const handleSendMessage = (comment) => {
    setPostComment([...PostComment, comment]);
  };

  const {
    isLoading,
    error,
    data: project_detail,
  } = useQuery(["project_detail"], async () =>
    fetch("/data/project_detail.json").then((res) => res.json())
  );


  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className={`container ${styles.box}`}>
        <div className="row">
          <div className={styles.title}>{project_detail.title}</div>
        </div>
        <div className={`${styles["title-row"]}`}>
          <div className={styles.date}>{project_detail.createdAt}</div>
          <div className={styles["buttons"]}>
            <div className="m-2">
              <SmallButton
                text={"수정하기"}
                backgroundColor={"#D9D9D9"}
                textColor={"black"}
              />
            </div>
            <div className="m-2">
              <SmallButton text={"모집마감"} backgroundColor={"red"} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.title}`}>작성자</div>
          <PostProfile userType={2} />
        </div>
        <div className="row">
          <label className={`col-label ${styles.title}`}>스터디 정보</label>
          <div className="container">
            <div className="row">
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 인원</div>
                <div className={styles["sub-input"]}>
                  {project_detail.Participants.length}명 /{" "}
                  {project_detail.info.peopleCount}명
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>진행 방식</div>
                <div className={styles["sub-input"]}>
                  {project_detail.info.contactMethod}
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 기술</div>
                <div className={styles["sub-input"]}>
                  <div className={styles["category-box"]}>
                    {project_detail.info.skills.map((skill, index) => {
                      return <CategoryBox key={index} category={skill.skill} />;
                    })}
                  </div>
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 분야</div>
                <div className={styles["sub-input"]}>
                  <div className={styles["field-box"]}>
                    {project_detail.info.field.map((field, index) => {
                      return <CategoryBox key={index} category={field} />;
                    })}
                  </div>
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>시작 예정일</div>
                <div className={styles["sub-input"]}>
                  {project_detail.info.startDate}
                </div>
              </div>
              <div className={styles["myCol-6-2"]}>
                <div className={styles["myCol-6-2-sub"]}>
                  <div className={styles["sub-title"]}>예상 기간</div>
                  <div className={styles["sub-input"]}>
                    {project_detail.info.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.title}`}>스터디 소개</div>
          <div className={styles["border-box"]}>
            {project_detail.description}
          </div>
        </div>
        <div className="row">
          <div className={`${styles.title}`}>요구사항</div>
          <div className={styles["border-box"]}>
            {project_detail.requirement}
          </div>
        </div>
        <div className="row">
          <div className={`${styles.title}`}>참여자</div>
          <PostProfile userType={1} />
        </div>
        <div className="row">
          <div className={`${styles.title}`}>신청자</div>
          <PostProfile userType={0} />
        </div>
        <div className="row">
          <div className={`${styles.title}`}>{PostComment.length}개의 댓글</div>
          <div className={`p-0 ${styles["flex-grow-0"]} mt-3`}>
            <PostSendMessageForm onSendMessage={handleSendMessage}/>
          </div>
          <div className={styles["chat-box"]}>
            {PostComment.map((comment, index) => {
              return (
                <ChatLeft
                  key={index}
                  text={comment.text}
                  image={comment.profile}
                  name={comment.name}
                  date={comment.date}
                  isPost={true}
                />
              );
            })}
           
          </div>
        </div>
      </div>
    </>
  );
}
