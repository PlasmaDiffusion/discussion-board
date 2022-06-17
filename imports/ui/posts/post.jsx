import React from "react";

function Post({email, message}) {
  return (
    <>
      <h3>{email}</h3>
      <p>{message}</p>
    </>
  );
}

export default Post;
