import React, { useEffect, useState } from "react";

//Shows a user's post, email and a color on the feed from provided props
function Post({ email, message, color }) {
  
  // Check for line breaks, then split it in an array to be output properly
  const messageWithLineBreaks = () => {
    if (!message) return message;
    const splitMessage = message.split("\n");
    if (splitMessage.length <= 1) return message;

    const resultArr = [];
    splitMessage.forEach((item, i) => {
      resultArr.push(item);
      resultArr.push(<br />);
    });

    return resultArr;
  };

  return (
    <>
      <div className="post" style={{ outline: `2px solid ${color}` }}>
        <h3 style={{ backgroundColor: color, color: "white" }}>{email}</h3>
        <p>{messageWithLineBreaks()}</p>
      </div>
    </>
  );
}

export default React.memo(Post);
