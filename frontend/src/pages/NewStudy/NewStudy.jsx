import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useQuery } from "@tanstack/react-query";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./NewStudy.module.css";
import SmallButtonMobile from "../../components/buttons/SmallButtonMobile";
import AutoExpandingTextArea from "../../components/newproject/AutoExpandingTextArea";

import Select from "react-select";


export default function NewProject() {

  const {
    isLoading,
    error,
    data: categoryData,
  } = useQuery(["categoryData"], async () =>
    fetch("/data/category.json").then((res) => res.json())
  );

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

  const optionsWithCategory = categoryData && categoryData.data.map((category) => ({
    label: category.category,
    options: category.list.map((item) => ({
      label: item.text,
      value: item.text,
      color: item.color,
    })),
  }));

  const optionsOnlyCategory = categoryData && categoryData.data.map((category) => ({
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
    <>
    {isLoading && <p>isLoding...</p>}
    {error && <p>error</p>}
    <div className={`container ${styles.box}`}>
      <form>
        <div className="form-group row">
          <label htmlFor="project" className={`col-form-label ${styles.title}`}>
            스터디 제목
          </label>
          <div className="">
            <input
              type="text"
              className={`form-control ${styles["input-title"]}`}
              id="input1"
              placeholder="스터디 제목을 입력하세요."
            />
          </div>
        </div>
        <div className="form-group row">
          <label className={`col-form-label ${styles.title}`}>
            스터디 정보
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
                <div className={styles["sub-title"]}>스터디 기술</div>
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
                  이 정보는 다른 사람이 볼 수 없으며, 스터디를 함께하는
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
            스터디 소개
          </label>
          <div className="">
            <AutoExpandingTextArea id="introduce" placeholder="스터디 대해 소개해주세요."/>
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
    </>
  );
}
