import React, { useEffect, useState } from "react";
import SideBar from "../../components/project/SideBar";
import styles from "./Project.module.css";
import { v4 as uuid } from "uuid";
import SmallButton from "../../components/buttons/SmallButton";
import CategoryTag from "../../components/project/CategoryTag";
import { useNavigate } from "react-router-dom";
import ToggleButton from "../../components/project/ToggleButton";
import ProjectList from "../../components/project/ProjectList";
import { BiMenu } from "react-icons/bi";

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

export default function Project() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [recruit, setRecruit] = useState(true);
  const [sideBar, setSideBar] = useState(
    window.innerWidth >= 768 ? true : false
  );

  const screenChange = (event) => {
    const matches = event.matches;
    setSideBar(matches);
  };
  const handleCategories = (category) => {
    if (categories.includes(category)) {
      setCategories((prev) => prev.filter((c) => c !== category));
    } else {
      setCategories((prev) => [...prev, category]);
    }
  };
  const handleWriteClick = () => {
    navigate("/projects/new-project");
  };
  const handleRecruit = () => {
    setRecruit((prev) => !prev);
  };
  const handleSideBar = () => {
    setSideBar((prev) => !prev);
  };

  useEffect(() => {
    const mql = window.matchMedia("screen and (min-width:768px)");
    mql.addEventListener("change", screenChange);

    return () => mql.removeEventListener("change", screenChange);
  }, []);

  return (
    <div className={styles.page}>
      {sideBar && (
        <SideBar
          onClick={handleCategories}
          categoryList={categories}
          categories={categoryData}
          toggle={handleSideBar}
        />
      )}
      <div className={styles.main}>
        {!sideBar && (
          <BiMenu className={styles.menuBtn} onClick={handleSideBar} />
        )}
        <section className={styles.header}>
          <aside className={styles.header__upper}>
            <ul className={styles.list}>
              {categories.map((category) => (
                <CategoryTag
                  key={uuid()}
                  category={category}
                  color={getColor(category)}
                  onClick={handleCategories}
                />
              ))}
            </ul>
            <SmallButton text="글쓰기" onClick={handleWriteClick} />
          </aside>
          <ToggleButton recruit={recruit} onClick={handleRecruit} />
        </section>
        <ProjectList categories={categories} recruitment={recruit} />
      </div>
    </div>
  );
}

function getColor(t) {
  for (const category of categoryData) {
    for (const c of category.list) {
      if (c.text === t) {
        return c.color;
      }
    }
  }
}
