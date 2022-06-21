import React from "react";

//Shows a user's post, email and a color on the feed from provided props
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
