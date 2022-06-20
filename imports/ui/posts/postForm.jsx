import React, { useState } from "react";

function PostForm({ user }) {
  const [message, setMessage] = useState("");

  const createPost = ({ _id, message }) => {
    // PostsCollection.insert(_id, {
    //   $set: {
    //     emailId: user._id,
    //     message: message
    //   }
    // })
  };

  //TODO: Get logged in user/email and submit to server
  function OnSubmit(e) {
    e.preventDefault();
    console.log(message);
  }

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Submit a new post </h2>
      <br />

      <form onSubmit={OnSubmit}>
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostForm;
