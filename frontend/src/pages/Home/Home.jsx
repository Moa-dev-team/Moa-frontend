import React from "react";
import HomeArticle from "../../components/home/HomeArticle";
import styles from "./Home.module.css";
import project from "../../assets/images/project.jpeg";
import study from "../../assets/images/study.jpeg";
import people from "../../assets/images/people.jpeg";

const datas = [
  {
    id: 1,
    title: "프로젝트",
    text: `
    협업은 현대의 업무에서 매우 중요한 요소 중 하나입니다.
    한 사람이 모든 일을 처리하는 것이 아니라,
    여러 사람이 서로 협력하여 일을 수행하는 것이
    더욱 효과적입니다.`,
    path: "/projects",
    position: "left",
    image: project,
  },
  {
    id: 2,
    title: "스터디",
    text: `
    공부를 함께하면 지식을 공유하고 개념을 깊이
    이해할 수 있으며, 
    몰입도가 향상되어 효율적인 학습이 가능합니다.
    또한 이는 다른 사람들과의 관계를 발전시킬 수 있는
    매우 중요한 활동입니다.`,
    path: "/studies",
    position: "right",
    image: study,
  },
  {
    id: 3,
    title: "유저",
    text: `
    다른 사람들을 의식하며 성장하면, 자신의 시야가 넓어지고
    역량이 향상됩니다. 타인의 관점과 피드백을 수용하면서
    자신의 한계를 극복하고,
    새로운 아이디어와 인사이트를 얻을 수 있습니다.`,
    path: "/users",
    position: "left",
    image: people,
  },
];

export default function Home() {
  return (
    <ul className={styles.list}>
      {datas.map((data) => (
        <HomeArticle key={data.id} article={data} />
      ))}
    </ul>
  );
}
