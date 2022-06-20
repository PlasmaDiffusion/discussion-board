import React, { useEffect, useState } from "react";
import Post from "./post";

import { useTracker } from "meteor/react-meteor-data";
import { PostsCollection } from "../../api/PostsCollection";

function PostList() {
  const posts = useTracker(() => {
    let fetchedPosts = PostsCollection.find().fetch();

    // Populate email fields using collection helpers (back end uses a post's emailId to find this)
    fetchedPosts.forEach((post) => {
      Meteor.call("findUser", post.emailId, function (error, result) {
        console.log(result.username);
        post.email = result.username;
      });
    });

    return fetchedPosts;
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
