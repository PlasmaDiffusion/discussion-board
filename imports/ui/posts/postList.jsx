import React, { useEffect, useState } from "react";
import Post from "./post";

import { useTracker } from "meteor/react-meteor-data";
import { PostsCollection } from "../../api/PostsCollection";

function PostList() {
  const [posts, setPosts] = useState([
    { email: "Someone@gmail.com", message: "Placeholder message" },
    { email: "Dude@gmail.com", message: "Another placeholder message" },
  ]);

  //Get posts from api here
  const actualPosts = useTracker(() => {
    let posts = PostsCollection.find().fetch();
    console.log(posts);
    return posts;
  });

  return (
    <>
    
      {actualPosts.map((post) => (
        <Post email={post.email} message={post.message} />
      ))}
    </>
  );
}

export default PostList;
