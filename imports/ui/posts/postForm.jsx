import React, { useState } from "react";
import { PostsCollection } from "../../api/PostsCollection";

function PostForm({ user }) {
  const [message, setMessage] = useState("");

  const createPost = () => {
    PostsCollection.insert(_id, {
      $set: {
        emailId: user._id,
        message: message,
      },
    });
  };

  function OnSubmit(e) {
    e.preventDefault();
    createPost();
  }

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Submit a New Post</h2>
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
