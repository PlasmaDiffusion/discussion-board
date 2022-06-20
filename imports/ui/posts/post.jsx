import React, { useEffect, useState } from "react";

//Shows post and gets user data based on the emailId provided
function Post({ email, message, color }) {
  return (
    <>
      <div className="post" style={{ outline: `2px solid ${color}` }}>
        <h3 style={{ backgroundColor: color, color: "white" }}>{email}</h3>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Post;
