import React, { useState } from "react";
import styles from "./SideBarList.module.css";
import SideBarItem from "./SideBarItem";
import { IoIosArrowUp } from "react-icons/io";

export default function SideBarList({ categoryItems, onClick }) {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <li className={styles.list}>
      <p className={styles.category__name}>{categoryItems.category}</p>
      <IoIosArrowUp
        className={`${styles.arrow} ${toggle ? "" : styles.hidden}`}
        onClick={handleClick}
      />
      <ul
        className={`${styles.category__list} ${
          toggle ? "" : styles.category__hidden
        }`}
      >
        {categoryItems.list.map((item, index) => (
          <SideBarItem key={index} item={item} onClick={onClick} />
        ))}
      </ul>
    </li>
  );
}
