import React, { useEffect, useState } from "react";
import Post from "./post";

import { useTracker } from "meteor/react-meteor-data";
import { PostsCollection, PostsHelpers } from "../../api/PostsCollection";

function PostList() {

  const posts = useTracker(() => {
    let fetchedPosts = PostsCollection.find().fetch();

    // Populate email fields using collection helpers (back end uses the emailId to find this)
    fetchedPosts.forEach((post) => {
      post.email = post.email().email;
    });

    return posts;
  });

  return (
    <>
      {posts.map((post) => (
        <Post email={post.email} message={post.message} />
      ))}
    </>
  );
}

export default PostList;
