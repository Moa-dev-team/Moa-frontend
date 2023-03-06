import React, { useState } from "react";
import styles from "./Message.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MessageUserProfile from "./MessageUserProfile";
import image from "../../assets/images/profile.png";
import ChatRight from "./ChatRight";
import ChatLeft from "./ChatLeft";
import { BiMenu } from "react-icons/bi";
import {AiOutlineArrowLeft} from "react-icons/ai";

export default function Message() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // set initial state to closed

  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen); // toggle the state
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
                  className="btn btn-primary m-3"
                  id="sidebar-toggle"
                  onClick={handleToggleClick}
                >
                  <AiOutlineArrowLeft className="bi fs-4 m-0" />
                </button>
              </div>
              <MessageUserProfile
                username="안호성"
                job="프론트엔드"
                isSelected={true}
              />
              <MessageUserProfile
                username="김재강"
                job="백엔드"
                isSelected={false}
                count="5"
              />
            </div>
            {/* userlist */}
            <div className="row g-0">
              <div className="d-none d-lg-block col-lg-4 col-xl-3 border-right">
                <p className={styles["user-header"]}>Message</p>
                <div className={styles["user-list"]}>
                  <MessageUserProfile
                    username="안호성"
                    job="프론트엔드"
                    isSelected={true}
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                  <MessageUserProfile
                    username="김재강"
                    job="백엔드"
                    isSelected={false}
                    count="5"
                  />
                </div>

                <hr className="d-block d-lg-none mt-1 mb-0" />
              </div>
              <div className="col-12 col-lg-8 col-xl-9">
                <div className="py-2 px-4 border-bottom">
                  <div className="d-flex align-items-center py-1">
                    {/* sidebar Toggle */}
                    <div className="d-lg-none">
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
                        src={image}
                        className={styles.image}
                        alt="Sharon Lessman"
                        width="40"
                        height="40"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <strong>안호성</strong>
                      <div className="text-muted small">프론트엔드</div>
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  <div className={`${styles["chat-messages"]} p-4`}>
                    <ChatRight
                      text="안녕하세요"
                      image={image}
                      name="안호성"
                      date={new Date("2020-01-01")}
                    />
                    <ChatLeft
                      text="안녕못한데?"
                      image={image}
                      name="윤강"
                      date={new Date("2020-01-01")}
                    />
                    <ChatRight
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus, reprehenderit, odit sed earum ullam impedit veritatis totam libero dolorum autem rem quia ipsa dolor nostrum? Suscipit, eius? Quo, aut.
                      Quibusdam tempora dicta sint eum veritatis adipisci totam eos, deserunt commodi aperiam eaque laboriosam beatae! Libero tempore sunt odit deserunt, explicabo corporis labore adipisci mollitia autem ducimus, iusto consectetur cum.
                      Qui, voluptate! Quae consequuntur deleniti veniam fugiat illo unde repellendus. Quis beatae tempora, aliquid quae illo praesentium ducimus magni velit nemo saepe odio id distinctio? Labore aspernatur impedit molestiae magni?"
                      image={image}
                      name="안호성"
                      date={new Date("2020-01-01")}
                    />
                    <ChatLeft
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus, reprehenderit, odit sed earum ullam impedit veritatis totam libero dolorum autem rem quia ipsa dolor nostrum? Suscipit, eius? Quo, aut.
                      Quibusdam tempora dicta sint eum veritatis adipisci totam eos, deserunt commodi aperiam eaque laboriosam beatae! Libero tempore sunt odit deserunt, explicabo corporis labore adipisci mollitia autem ducimus, iusto consectetur cum?"
                      image={image}
                      name="윤강"
                      date={new Date("2020-01-01")}
                    />
                    <ChatRight
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus, reprehenderit, odit sed earum ullam impedit veritatis totam libero dolorum autem rem quia ipsa dolor nostrum? Suscipit, eius? Quo, aut.
                      Quibusdam tempora dicta sint eum veritatis adipisci totam eos, deserunt commodi aperiam eaque laboriosam beatae! Libero tempore sunt odit deserunt, explicabo corporis labore adipisci mollitia autem ducimus, iusto consectetur cum.
                      Qui, voluptate! Quae consequuntur deleniti veniam fugiat illo unde repellendus. Quis beatae tempora, aliquid quae illo praesentium ducimus magni velit nemo saepe odio id distinctio? Labore aspernatur impedit molestiae magni?"
                      image={image}
                      name="안호성"
                      date={new Date("2020-01-01")}
                    />
                    <ChatLeft
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus, reprehenderit, odit sed earum ullam impedit veritatis totam libero dolorum autem rem quia ipsa dolor nostrum? Suscipit, eius? Quo, aut.
                      Quibusdam tempora dicta sint eum veritatis adipisci totam eos, deserunt commodi aperiam eaque laboriosam beatae! Libero tempore sunt odit deserunt, explicabo corporis labore adipisci mollitia autem ducimus, iusto consectetur cum?"
                      image={image}
                      name="윤강"
                      date={new Date("2020-01-01")}
                    />
                  </div>
                </div>

                <div
                  className={`${styles["flex-grow-0"]} ${styles["py-3"]} ${styles["px-4"]} ${styles["border-top"]}`}
                >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message"
                    />
                    <button className="btn btn-primary">sidebar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
