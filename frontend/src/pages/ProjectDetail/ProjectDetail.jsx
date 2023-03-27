import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./ProjectDetail.module.css";
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
  console.log(project_detail)

  return (
    <>
      <div className={`container ${styles.box}`}>
        <div className="row">
          <label htmlFor="project" className={`col-label ${styles.title}`}>
            프로젝트 제목
          </label>
          <div className="">
            <div className={styles["input-title"]}>
              {project_detail && project_detail.title}
            </div>
          </div>
        </div>
        <div className="row">
          <label className={`col-label ${styles.title}`}>
            스터디 정보
          </label>
          <div className="container">
            <div className="row">
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 인원</div>
                {project_detail && project_detail.info.peopleCount}
              </div>

              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>진행 방식</div>
                {project_detail && project_detail.info.contactMethod}
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>스터디 기술</div>
                {/* {project_detail && project_detail.info.skills.map((skill) => {
                  return <div>{skill}</div>;
                })} */}
                {project_detail && project_detail.info.skills}
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>시작 예정일</div>
                {project_detail && project_detail.info.startDate}
              </div>
              <div className={styles["myCol-6-2"]}>
                <div className={styles["myCol-6-2-sub"]}>
                  <div className={styles["sub-title"]}>예상 기간</div>
                  {project_detail && project_detail.info.duration}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <label
            htmlFor="introduce"
            className={`col-label ${styles.title}`}
          >
            스터디 소개
          </label>
          <div className="">
            {project_detail && project_detail.description}
          </div>
        </div>
        <div className="row">
          <label htmlFor="need" className={`col-label ${styles.title}`}>
            요구사항
          </label>
           {project_detail &&project_detail.requirement}
        </div>
        <div className={styles["button-line"]}>
          <div className="m-2">
            <SmallButtonMobile
              text={"취소"}
              backgroundColor={"#D9D9D9"}
              textColor={"black"}
            />
          </div>
          <div className="m-2">
            <SmallButtonMobile text={"글쓰기"} />
          </div>
        </div>
      </div>
    </>
  );
}
