import React, { useState } from "react";
import SideBar from "../../components/project/SideBar";
import styles from "./Project.module.css";

export default function Project() {
  const [categories, setCategories] = useState([]);
  const handleCategories = (category) => {
    if (categories.includes(category)) {
      setCategories((prev) => prev.filter((c) => c !== category));
    } else {
      setCategories((prev) => [...prev, category]);
    }
  };

  return (
    <div className={styles.page}>
      <SideBar onClick={handleCategories} />
      <div className={styles.main}>
        <aside>{categories}</aside>
        <section>project</section>
      </div>
    </div>
  );
}
