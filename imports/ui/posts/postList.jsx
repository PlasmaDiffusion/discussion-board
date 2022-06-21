import React from "react";
import Post from "./post";

import { useTracker } from "meteor/react-meteor-data";
import { PostsCollection } from "../../api/PostsCollection";

//AKA the feed; Fetches all posts and sort by date created (new at bottom)
function PostList() {
  const posts = useTracker(() => {
    let fetchedPosts = PostsCollection.find({},{sort: {createdAt: 1}}).fetch();

    return fetchedPosts;
  });

  return (
    <>
      {posts.map((post) => (
        <Post email={post.email} message={post.message} color={post.color || "black"} />
      ))}
    </>
  );
}

export default PostList;
