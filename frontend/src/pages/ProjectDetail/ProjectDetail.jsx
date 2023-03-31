import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./ProjectDetail.module.css";
import SmallButton from "../../components/buttons/SmallButton";
import PostProfile from "../../components/projectDetail/PostProfile";
import CategoryBox from "../../components/projectDetail/CategoryBox";
import PostSendMessageForm from "../../components/projectDetail/PostSendMessageForm";
import ChatLeft from "../../components/messages/ChatLeft";
import image from "../../assets/images/profile.png";

const data = {
  title: "같이 성장하실 프론트엔드 개발자분 구합니다.",
  info: {
    peopleCount: "3",
    contactMethod: "대면",
    skills: [
      { skill: "JavaScript", color: "#ffd699" },
      { skill: "TypeScript", color: "#99c0ff" },
      { skill: "React", color: "#99eaff" },
      { skill: "Vue", color: "#c3edab" },
    ],
    field: ["프론트엔드", "백엔드"],
    startDate: "2023-03-26",
    duration: "2달",
  },
  description: "프로젝트 소개글 예시입니다. 이미지 파일은 생략되었습니다.",
  requirement: "요구사항 글입니다.",
  createdAt: "2021-03-26",
  author_id: 3,
  participants: [2, 3],
  applicants: [4, 5],
  comments: [
    {
      id: 0,
      name: "안호성",
      text: "안녕하세요",
      profile: image,
      date: new Date("2020-01-01"),
    },
    {
      id: 2,
      name: "윤강",
      text: "안녕못한데?",
      profile: image,
      date: new Date("2020-01-02"),
    },
  ],
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [postComment, setPostComment] = useState(data.comments);
  const [participants, setParticipants] = useState(data.participants);
  const [applicants, setApplicants] = useState(data.applicants);

  const handleSendMessage = (comment) => {
    setPostComment([...postComment, comment]);
  };

  const joinById = (userId) => {
    setApplicants(applicants.filter((id) => id !== userId));
    setParticipants([...participants, userId])
  };

  const outById = (userId) => {
    setParticipants(participants.filter((id) => id !== userId));
    setApplicants([...applicants, userId])
  };

  const deleteById = (userId) => {
    setApplicants(applicants.filter((id) => id !== userId));
  };


  return (
    <>
      <div className={`container ${styles.box}`}>
        <div className="row">
          <div className={styles.title}>{data.title}</div>
        </div>
        <div className={`${styles["title-row"]}`}>
          <div className={styles.date}>{data.createdAt}</div>
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
        <div className="row container">
          <div className={`${styles.title}`}>작성자</div>
          <PostProfile userType={2} />
        </div>
        <div className="row container">
          <label className={`col-label ${styles.title}`}>스터디 정보</label>
          <div className="container">
            <div className="row">
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 인원</div>
                <div className={styles["sub-input"]}>
                  {participants.length}명 / {data.info.peopleCount}명
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>진행 방식</div>
                <div className={styles["sub-input"]}>
                  {data.info.contactMethod}
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 기술</div>
                <div className={styles["sub-input"]}>
                  <div className={styles["category-box"]}>
                    {data.info.skills.map((skill, index) => {
                      return <CategoryBox key={index} category={skill.skill} />;
                    })}
                  </div>
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 분야</div>
                <div className={styles["sub-input"]}>
                  <div className={styles["field-box"]}>
                    {data.info.field.map((field, index) => {
                      return <CategoryBox key={index} category={field} />;
                    })}
                  </div>
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>시작 예정일</div>
                <div className={styles["sub-input"]}>{data.info.startDate}</div>
              </div>
              <div className={styles["myCol-6-2"]}>
                <div className={styles["myCol-6-2-sub"]}>
                  <div className={styles["sub-title"]}>예상 기간</div>
                  <div className={styles["sub-input"]}>
                    {data.info.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container">
          <div className={`${styles.title}`}>스터디 소개</div>
          <div className={styles["border-box"]}>{data.description}</div>
        </div>
        <div className="row container">
          <div className={`${styles.title}`}>요구사항</div>
          <div className={styles["border-box"]}>{data.requirement}</div>
        </div>
        <div className="row container">
          <div className={`${styles.title}`}>참여자</div>
          {participants.map((participant, index) => {
            return (
              <PostProfile key={index} userId={participant} userType={1} outById={outById}/>
            );
          })}
        </div>
        <div className="row container">
          <div className={`${styles.title}`}>신청자</div>
          {applicants.map((applicant, index) => {
            return <PostProfile key={index} userId={applicant} userType={0} joinById={joinById} deleteById={deleteById} />;
          })}
        </div>
        <div className="row container">
          <div className={`${styles.title}`}>{postComment.length}개의 댓글</div>
          <div className={`p-0 ${styles["flex-grow-0"]} mt-3`}>
            <PostSendMessageForm onSendMessage={handleSendMessage} />
          </div>
          <div className={styles["chat-box"]}>
            {postComment.map((comment, index) => {
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
