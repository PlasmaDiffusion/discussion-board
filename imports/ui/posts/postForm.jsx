import React, { useState } from "react";
import { PostsCollection } from "../../api/PostsCollection";
import "./styles.css"

// Submit a post with an email along with the date it was created, plus a bonus post color
function PostForm({ user }) {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#000000");

  const createPost = () => {
    PostsCollection.insert(
      {
        email: user.username,
        message,
        createdAt: new Date(),
        color: color,
      },
      { validate: false }
    );
  };

  // Send form to back end and reset form's text
  function OnSubmit(e) {
    e.preventDefault();
    createPost();
    setMessage("");
  }

  function selectPostColor(e)
  {
    setColor(e.target.value);
  }

  return (
    <div>
      <h2 className="formTitle">Submit a New Post</h2>
      <br />

      <form onSubmit={OnSubmit} className="postForm">
        <textarea
          
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></textarea>

        <br />

        <div>
          <label style={{ color: color }}>Post Color: </label>
          <button type="button" className="coloredButton" onClick={selectPostColor} value="#000000" style={{ backgroundColor: "#000000"}} />
          <button type="button" className="coloredButton" onClick={selectPostColor} value="#6495ED" style={{ backgroundColor: "#6495ED" }} />
          <button type="button" className="coloredButton"onClick={selectPostColor} value="#8A2BE2" style={{ backgroundColor: "#8A2BE2" }} />
          <button type="button" className="coloredButton" onClick={selectPostColor} value="#A52A2A" style={{ backgroundColor: "#A52A2A" }} />
        </div>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostForm;
