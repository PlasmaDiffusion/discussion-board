import React from "react";
import Login from "./components/login/login";
import PostForm from "./posts/postForm";
import PostList from "./posts/postList";
import { useTracker } from "meteor/react-meteor-data";

function App() {
  const user = useTracker(() => Meteor.user());

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <PostForm />
          <PostList />
        </>
      )}
    </div>
  );
}

export default App;
