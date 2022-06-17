import React, { useEffect, useState } from "react";
import Post from "./post";

function PostList() {
  const [posts, setPosts] = useState([
    { email: "Someone@gmail.com", message: "Placeholder message" },
    { email: "Dude@gmail.com", message: "Another placeholder message" },
  ]);

  //Get posts from api here
  useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post email={post.email} message={post.message} />
      ))}
    </>
  );
}

export default PostList;
