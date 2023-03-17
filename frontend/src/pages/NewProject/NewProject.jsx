import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./NewProject.module.css";
import SmallButtonMobile from "../../components/buttons/SmallButtonMobile";
import AutoExpandingTextArea from "../../components/newproject/AutoExpandingTextArea";

import Select from "react-select";

const categoryData = [
  {
    category: "프론트엔드",
    list: [
      { text: "JavaScript", color: "#ffd699" },
      { text: "TypeScript", color: "#99c0ff" },
      { text: "React", color: "#99eaff" },
      { text: "Vue", color: "#c3edab" },
      { text: "Svelte", color: "#ff99ad" },
      { text: "Nextjs", color: "#cbd3d6" },
    ],
  },
  {
    category: "백엔드",
    list: [
      { text: "Java", color: "#90ee90" },
      { text: "Spring", color: "#65c368" },
      { text: "Nodejs", color: "#487047" },
      { text: "Nestjs", color: "#ff7f8a" },
      { text: "Go", color: "#7fecff" },
      { text: "Kotlin", color: "#7f9bff" },
      { text: "Express", color: "#90ee90" },
      { text: "MySQL", color: "#4b72a8" },
      { text: "MongoDB", color: "#4b72a8" },
      { text: "Python", color: "#4b72a8" },
      { text: "Django", color: "#c7888d" },
      { text: "php", color: "#aad0ef" },
      { text: "GraphQL", color: "#e7b2cd" },
      { text: "Firebase", color: "#f29886" },
    ],
  },
  {
    category: "모바일",
    list: [
      { text: "Flutter", color: "#40cce2" },
      { text: "Swift", color: "#ffa07a" },
      { text: "Kotlin", color: "#7f9bff" },
      { text: "ReactNative", color: "#99eaff" },
      { text: "Unity", color: "#bdbdbd" },
    ],
  },
  {
    category: "기타",
    list: [
      { text: "AWS", color: "#ffa07a" },
      { text: "Kubernetes", color: "#7ad1ff" },
      { text: "Docker", color: "#96ebff" },
      { text: "Git", color: "#ff907a" },
      { text: "Figma", color: "#ee8bd1" },
      { text: "Zeplin", color: "#f2b787" },
      { text: "Jest", color: "#ce8e8d" },
      { text: "C", color: "#40cce2" },
    ],
  },
];
export default function NewProject() {
  const [startDate, setStartDate] = useState(new Date());
  const monthCount = [
    { value: "1-", label: "1달 미만" },
    { value: "1", label: "1달" },
    { value: "2", label: "2달" },
    { value: "3", label: "3달" },
    { value: "4", label: "4달" },
    { value: "5", label: "5달" },
    { value: "6", label: "6달" },
    { value: "7", label: "7달" },
    { value: "8", label: "8달" },
    { value: "9", label: "9달" },
    { value: "10", label: "10달" },
    { value: "11", label: "11달" },
    { value: "12", label: "12달" },
  ];

  const proceed = [
    { value: "대면", label: "대면" },
    { value: "비대면", label: "비대면" },
  ];

  const optionsWithCategory = categoryData.map((category) => ({
    label: category.category,
    options: category.list.map((item) => ({
      label: item.text,
      value: item.text,
      color: item.color,
    })),
  }));

  const optionsOnlyCategory = categoryData.map((category) => ({
    label: category.category,
    value: category.category,
  }));

  const peopleCount = [
    { value: "1", label: "1명" },
    { value: "2", label: "2명" },
    { value: "3", label: "3명" },
    { value: "4", label: "4명" },
    { value: "5", label: "5명" },
    { value: "6", label: "6명" },
    { value: "7", label: "7명" },
    { value: "8", label: "8명" },
    { value: "9", label: "9명" },
    { value: "10", label: "10명" },
  ];

  const customStyles = {
    multiValue: (styles, { data }) => ({
      ...styles,
      backgroundColor: data.color,
    }),
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "black",
      fontSize: "0.7rem",
    }),
  };

  return (
    <div className={`container ${styles.box}`}>
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
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 인원</div>
                <Select
                  options={peopleCount}
                  className={`select ${styles["custom-select"]}`}
                  classNamePrefix="select"
                  placeholder="모집인원을 선택하세요."
                />
              </div>

              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>진행 방식</div>
                <Select
                  options={proceed}
                  className={`select ${styles["custom-select"]}`}
                  classNamePrefix="select"
                  placeholder="대면 / 비대면"
                />
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>사용 기술</div>
                <Select
                  options={optionsWithCategory}
                  styles={customStyles}
                  className={`select ${styles["custom-select"]}`}
                  classNamePrefix="select"
                  placeholder="사용 기술을 선택하세요"
                  isMulti
                />
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>모집 분야</div>
                <Select
                  options={optionsOnlyCategory}
                  className={`select ${styles["custom-select"]}`}
                  classNamePrefix="select"
                  placeholder="모집 분야를 선택하세요"
                  isMulti
                />
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>시작 예정일</div>
                <div className={styles["calender-box"]}>
                  <DatePicker
                    className={styles["sub-input"]}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy/MM/dd"
                  />
                </div>
              </div>
              <div className={styles["myCol-6"]}>
                <div className={styles["sub-title"]}>예상 기간</div>
                <Select
                  options={monthCount}
                  className={`select ${styles["custom-select"]}`}
                  classNamePrefix="select"
                  placeholder="예상 기간을 선택하세요."
                />
              </div>
              <div className={styles["myCol-6"]}></div>
              <div className={styles["myCol-6-2"]}>
                <div className={styles["myCol-6-2-sub"]}>
                  <div className={styles["sub-title"]}>연락 방법</div>
                  <input
                    type="text"
                    placeholder="연락수단 / url ..."
                    className={styles["sub-input"]}
                  />
                </div>
                <div className={styles["more"]}>
                  이 정보는 다른 사람이 볼 수 없으며, 프로젝트를 함께하는
                  사람에게 자동으로 전송됩니다.
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="introduce"
            className={`col-form-label ${styles.title}`}
          >
            프로젝트 소개
          </label>
          <div className="">
            <AutoExpandingTextArea id="introduce" placeholder="프로젝트 대해 소개해주세요."/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="need" className={`col-form-label ${styles.title}`}>
            요구사항
          </label>
          <div className="">
            <AutoExpandingTextArea id="need" placeholder="요구사항을 입력해주세요."/>
          </div>
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
      </form>
    </div>
  );
}
