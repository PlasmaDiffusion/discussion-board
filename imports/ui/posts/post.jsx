import React, { useEffect, useState } from "react";

//Shows post and gets user data based on the emailId provided
function Post({ email, message }) {

  return (
    <>
      <h3>{email}</h3>
      <p>{message}</p>
    </>
  );
}

export default Post;
