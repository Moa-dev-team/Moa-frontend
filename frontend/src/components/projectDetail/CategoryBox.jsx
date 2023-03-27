import React, { useState, useEffect } from "react";
import styles from "./CategoryBox.module.css";

export default function CategoryBox({ category }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      fetch("/data/category.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function getColor(text) {
    let color = "";

    for (const category of data) {
      for (const item of category.list) {
        if (item.text === text) {
          color = item.color;
          break;
        }
      }
      if (color) break;
    }

    return color;
  }

  // Only render the component when data is not null
  if (data) {
    let color = getColor(category);
    return (
      <React.Fragment>
        <li
          className={styles.list}
          style={{ backgroundColor: color }}
        >
          <span className={styles.text}>{category}</span>
        </li>
      </React.Fragment>
    );
  } else {
    return null;
  }
}
