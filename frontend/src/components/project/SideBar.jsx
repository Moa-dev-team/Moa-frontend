import React, { useEffect, useState } from "react";
import styles from "./SideBar.module.css";
import SideBarList from "./SideBarList";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function SideBar({ onClick, categoryList, categories, toggle }) {
  const [mQuery, setMQuery] = useState(window.innerWidth < 768 ? true : false);

  const screenChange = (event) => {
    const matches = event.matches;
    setMQuery(matches);
  };

  useEffect(() => {
    const mql = window.matchMedia("screen and (max-width:768px)");
    mql.addEventListener("change", screenChange);

    return () => mql.removeEventListener("change", screenChange);
  }, []);

  return (
    <ul className={`${styles.category} ${mQuery ? styles.mobile : ""}`}>
      {mQuery && (
        <AiOutlineArrowLeft className={styles.menuToggleBtn} onClick={toggle} />
      )}
      {categories.map((categoryItems, index) => (
        <SideBarList
          key={index}
          categoryItems={categoryItems}
          onClick={onClick}
          categoryList={categoryList}
        />
      ))}
    </ul>
  );
}
