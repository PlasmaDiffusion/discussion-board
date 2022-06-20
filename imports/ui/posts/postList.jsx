import React, { useEffect, useState } from "react";
import Post from "./post";

import { useTracker } from "meteor/react-meteor-data";
import { PostsCollection } from "../../api/PostsCollection";

function PostList() {
  const posts = useTracker(() => {
    let fetchedPosts = PostsCollection.find().fetch();

    return fetchedPosts;
  });

  return (
    <>
      {posts.map((post) => (
        <Post emailId={post.emailId} message={post.message} />
      ))}
    </>
  );
}

export default PostList;
