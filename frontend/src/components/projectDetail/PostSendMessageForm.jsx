import React, { useState, useRef } from "react";
import styles from "./PostSendMessageForm.module.css";
import { AiOutlineSend } from "react-icons/ai";
import image from "../../assets/images/profile.png"

const myId = 0;
const MyName = "개발자";
const MyImage = image

export default function PostSendMessageForm({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef();

  const handleSubmit = (event) => {
    if (message.length === 0) return;
    event.preventDefault();
    onSendMessage({ id: myId, name : MyName, profile : MyImage, text: message, date: new Date() });
    setMessage("");
    textareaRef.current.focus();
  };
  return (
    <React.Fragment>
      <form
        className={`bg-light ${styles["form-box"]}`}
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <textarea
            ref={textareaRef}
            type="text"
            placeholder="댓글을 작성해주세요."
            aria-describedby="button-addon2"
            className={`form-control ${styles["text-area"]}`}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <div className="input-group-append d-flex align-items-center bg-white">
            <button id="button-addon2" type="submit" className="btn btn-link">
              <AiOutlineSend className="fa fa-paper-plane fs-2"></AiOutlineSend>
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
