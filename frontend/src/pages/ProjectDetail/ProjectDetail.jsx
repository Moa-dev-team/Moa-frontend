import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./ProjectDetail.module.css";
import SmallButton from "../../components/buttons/SmallButton";
import SmallButtonMobile from "../../components/buttons/SmallButtonMobile";

export default function ProjectDetail() {
  const { projectId } = useParams();

  const {
    isLoading,
    error,
    data: project_detail,
  } = useQuery(["project_detail"], async () =>
    fetch("/data/project_detail.json").then((res) => res.json())
  );

  return (
    <>
      <div className={`container ${styles.box}`}>
        <div className="row">
          <div className={styles.title}>
            {project_detail && project_detail.title}
          </div>
        </div>
        <div className={`${styles["title-row"]}`}>
          <div className={styles.date}>
            {project_detail && project_detail.createdAt}
          </div>
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
        </div>
        <div className="row">
          <label className={`col-label ${styles.title}`}>스터디 정보</label>
          <div className="container">
            <div className="row">
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 인원</div>
                <div className={styles["sub-input"]}>{project_detail && project_detail.info.peopleCount}</div>
              </div>

              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>진행 방식</div>
                <div className={styles["sub-input"]}>{project_detail && project_detail.info.contactMethod}</div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 기술</div>
                {/* {project_detail && project_detail.info.skills.map((skill) => {
                  return <div>{skill}</div>;
                })} */}
                <div className={styles["sub-input"]}>{project_detail && project_detail.info.skills}</div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 분야</div>
                <div className={styles["sub-input"]}>{project_detail && project_detail.info.field}</div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>시작 예정일</div>
                <div className={styles["sub-input"]}>{project_detail && project_detail.info.startDate}</div>
              </div>
              <div className={styles["myCol-6-2"]}>
                <div className={styles["myCol-6-2-sub"]}>
                  <div className={styles["sub-title"]}>예상 기간</div>
                  <div className={styles["sub-input"]}>{project_detail && project_detail.info.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <label htmlFor="introduce" className={`col-label ${styles.title}`}>
            스터디 소개
          </label>
          <div className="">{project_detail && project_detail.description}</div>
        </div>
        <div className="row">
          <label htmlFor="need" className={`col-label ${styles.title}`}>
            요구사항
          </label>
          {project_detail && project_detail.requirement}
        </div>
        <div className={styles["button-line"]}></div>
      </div>
    </>
  );
}
