import React, { useState, useEffect, useRef } from "react";
import styles from "./Chats.module.css";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";

// 나의 정보가 있어야 한다.
import myImage from "../../assets/images/profile.png";
const myId = 0;
const myName = "개발자";

//get api
//id 와 주고 받은 모든 쪽지의 보낸사람 id, 데이터의 메세지, 보낸 날짜
const messages = [
  { id: 2, text: "안녕하세요", date: new Date("2020-01-01") },
  { id: 0, text: "안녕못한데?", date: new Date("2020-01-01") },
];

export default function Chats({ id, name, image }) {
  const [chatMessages, setChatMessages] = useState(messages);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <React.Fragment>
      <div className={`${styles["chat-messages"]} p-4`}>
        {messages.map((message) => {
          if (myId === message.id)
            return (
              <ChatRight
                text={message.text}
                image={myImage}
                name={myName}
                date={message.date}
              />
            );
          return (
            <ChatLeft
              text={message.text}
              image={image}
              name={name}
              date={message.date}
            />
          );
        })}
        <div ref={messagesEndRef}></div>
      </div>
      <div
        className={`${styles["flex-grow-0"]} ${styles["py-3"]} ${styles["px-4"]} ${styles["border-top"]}`}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control m-"
            placeholder="메세지를 입력해주세요."
            
          />
          <button className="btn btn-primary">전송</button>
        </div>
      </div>
    </React.Fragment>
  );
}
