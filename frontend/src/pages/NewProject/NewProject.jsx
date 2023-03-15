import React from "react";
import styles from "./NewProject.module.css";
import SmallButton from "../../components/buttons/SmallButton";

export default function NewProject() {
  return (
    <div className="container m-5">
      <form>
        <div className="form-group row">
          <label htmlFor="project" className={`col-form-label ${styles.title}`}>
            프로젝트 제목
          </label>
          <div className="">
            <input
              type="text"
              className={`form-control ${styles["input-title"]}`}
              id="input1"
              placeholder="프로젝트 제목을 입력하세요."
            />
          </div>
        </div>
        <div className="form-group row">
          <label className={`col-form-label ${styles.title}`}>
            프로젝트 정보
          </label>
          <div className="container">
            <div className="row">
              <div className={styles["myCol-6"]}>1</div>
              <div className={styles["myCol-6"]}>2</div>
              <div className={styles["myCol-6"]}>3</div>
              <div className={styles["myCol-6"]}>4</div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="introduce" className={`col-form-label ${styles.title}`}>
            프로젝트 소개
          </label>
          <div className="">
            <textarea
              type="text"
              className={`form-control ${styles["text-area"]}`}
              id="introduce"
              placeholder="프로젝트 대해 소개해주세요."
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="need" className={`col-form-label ${styles.title}`}>
            요구사항
          </label>
          <div className="">
            <textarea
              type="text"
              className={`form-control ${styles["text-area"]}`}
              id="introduce"
              placeholder="프로젝트 대해 소개해주세요."
            />
          </div>
        </div>
        <div className={styles["button-line"]}>
          <div className="m-2">
            <SmallButton
              text={"취소"}
              backgroundColor={"#D9D9D9"}
              textColor={"black"}
            />
          </div>
          <div className="m-2">
            <SmallButton text={"글쓰기"}/>
          </div>
        </div>
      </form>
    </div>
  );
}
