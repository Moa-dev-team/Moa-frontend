import React, { useState } from "react";
import styles from "./Message.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MessageUserProfile from "./MessageUserProfile";
import image from "../../assets/images/profile.png";
import Chats from "./Chats";
import { BiMenu } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

// get api
// 나와 메세지를 주고 받은 모든 사람들의 아이디, 이름, 희망직군, 프로필 이미지, 가장 최근에 연락한 메세지 날짜, 읽지 않은 메세지 개수
// 가장 최근에 연락 메세지가 빠른 순으로 정렬
const users = [
  {
    id: 1,
    name: "안호성",
    job: "프론트엔드",
    profile: image,
    lastDate: new Date("2020-01-01"),
    unreadCount: 0,
  },
  {
    id: 10,
    name: "윤강",
    job: "프론트엔드",
    profile: image,
    lastDate: new Date("2020-01-02"),
    unreadCount: 2,
  },
  {
    id: 5,
    name: "김태근",
    job: "백엔드",
    profile: image,
    lastDate: new Date("2020-01-03"),
    unreadCount: 5,
  },
  {
    id: 3,
    name: "김재강",
    job: "백엔드",
    profile: image,
    lastDate: new Date("2020-01-04"),
    unreadCount: 0,
  },
  {
    id: 99,
    name: "김준교",
    job: "상놈",
    profile: image,
    lastDate: new Date("2020-01-05"),
    unreadCount: 0,
  },
];
// post api
// MessageUserProfile 을 클릭하여 읽지 않은 메세지 갱신

export default function Message() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // users 가 존재하지 않을 경우 예외 케이스 만들어야 함
  const [selectedId, setSelectedId] = useState(users[0].id);
  const selectedUser = users.find((user) => user.id === selectedId);

  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen); // toggle the state
  };

  const MessageUserProfileClickHandler = (userId) => {
    setSelectedId(userId);
  };

  return (
    <React.Fragment>
      <main className="content">
        <div className="container p-0">
          <div>
            {/* sidebar */}
            <div
              className={`${styles.sidebar} ${
                isSidebarOpen && styles["sidebar-open"]
              }`}
            >
              <div className="d-flex ">
                <p className={`${styles["user-header"]} m-auto`}>Message</p>
                <button
                  type="button"
                  className="btn btn-primary m-3 mt-4"
                  id="sidebar-toggle"
                  onClick={handleToggleClick}
                >
                  <AiOutlineArrowLeft className="bi fs-4 m-0" />
                </button>
              </div>
              {users.map((user) => (
                <MessageUserProfile
                  key={user.id}
                  username={user.name}
                  job={user.job}
                  profileImage={user.image}
                  count={user.unreadCount}
                  isSelected={user.id === selectedId}
                  onClick={() => MessageUserProfileClickHandler(user.id)}
                />
              ))}
            </div>
            {/* userlist */}
            <div className="row g-0">
              <div className="d-none d-md-block col-md-5 col-lg-4 col-xl-3 border-right">
                <p className={styles["user-header"]}>Message</p>
                <div className={styles["user-list"]}>
                  {users.map((user) => (
                    <MessageUserProfile
                      key={user.id}
                      username={user.name}
                      job={user.job}
                      profileImage={user.image}
                      count={user.unreadCount}
                      isSelected={user.id === selectedId}
                      onClick={() => MessageUserProfileClickHandler(user.id)}
                    />
                  ))}
                </div>

                <hr className="d-block d-md-none mt-1 mb-0" />
              </div>
              <div className="col-12 col-md-7 col-lg-8 col-xl-9">
                <div className="py-2 px-4 border-bottom">
                  <div className="d-flex align-items-center py-1">
                    {/* sidebar Toggle */}
                    <div className="d-md-none">
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="sidebar-toggle"
                        onClick={handleToggleClick}
                      >
                        <BiMenu className="bi fs-4 m-0" />
                      </button>
                    </div>
                    <div className="position-relative">
                      <img
                        src={selectedUser.profile}
                        className={styles.image}
                        alt="Sharon Lessman"
                        width="40"
                        height="40"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <strong>{selectedUser.name}</strong>
                      <div className="text-muted small">{selectedUser.job}</div>
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  <Chats
                    id={selectedId}
                    image={selectedUser.profile}
                    name={selectedUser.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
