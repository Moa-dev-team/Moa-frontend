import React from "react";
import MessageUserProfile from "./components/messages/MessageUserProfile";

const TestSung = () => {
  const boxStyle = {
    width : '300px',
    height : '800px',
    border : '1px solid black',
  } 
  return <React.Fragment style={{ marginTop: "10rem" }}>
    <div style={boxStyle}>
      <MessageUserProfile />
    </div>
  </React.Fragment>;
};

export default TestSung;
