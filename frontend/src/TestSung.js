import React from "react";
import MessageUserProfile from "./components/messages/MessageUserProfile";
import Message from "./components/messages/MessagePage";

const TestSung = () => {
  const boxStyle = {
    width: "300px",
    height: "800px",
    border: "1px solid black",
  };
  return (
    <React.Fragment>
        
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
