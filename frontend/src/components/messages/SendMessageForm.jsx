import React, { useState } from "react";
import styles from "./SendMessageForm.module.css";
import { AiOutlineSend } from "react-icons/ai";

const myId = 0;

export default function SendMessageForm({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    if (message.length === 0) return;
    event.preventDefault();
    onSendMessage({ id: myId, text: message, date: new Date() });
    setMessage("");
  };
  return (
    <React.Fragment>
      <form className={`bg-light ${styles["form-box"]}`} onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea
            type="text"
            placeholder="메세지를 입력해주세요"
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
