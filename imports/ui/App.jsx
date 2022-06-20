import React from "react";
import LoginPage from "./components/login/loginPage";
import PostForm from "./posts/postForm";
import PostList from "./posts/postList";
import { useTracker } from "meteor/react-meteor-data";

function App() {
  const user = useTracker(() => Meteor.user());

  return (
    <div>
      {!user ? (
        <LoginPage />
      ) : (
        <>
          <PostForm user={user} />
          <PostList />
        </>
      )}
    </div>
  );
}

export default App;
