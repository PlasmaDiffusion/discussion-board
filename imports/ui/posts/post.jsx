import React, { useEffect, useState } from "react";

//Shows post and gets user data based on the emailId provided
function Post({ emailId, message }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    Meteor.call("findUser", emailId, function (error, result) {
      console.log(result.username);
      setEmail(result.username);
    });
  }, []);

  return (
    <>
      <h3>{email}</h3>
      <p>{message}</p>
    </>
  );
}

export default Post;
