import React from "react";
import MessageUserProfile from "./components/messages/MessageUserProfile";
import Message from "./components/messages/Message";

const TestSung = () => {
  const boxStyle = {
    width: "300px",
    height: "800px",
    border: "1px solid black",
  };
  return (
    <React.Fragment>
        <Message/>
      {/* <div style={boxStyle}>
        <MessageUserProfile
          username="안호성"
          job="프론트엔드"
          isSelected="True"
        />
        <MessageUserProfile username="안호성" job="프론트엔드" />
      </div> */}
    </React.Fragment>
  );
};

export default TestSung;
