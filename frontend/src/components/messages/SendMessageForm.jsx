import React, {useState} from "react";

const myId = 0;

export default function SendMessageForm({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage({ id: myId, text: message, date: new Date() });
    setMessage("");
  };
  return <React.Fragment>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea
          className="form-control"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-primary">
          전송
        </button>
      </div>
    </form>
  </React.Fragment>;
}
