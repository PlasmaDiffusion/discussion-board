import React from "react";
import LoginPage from "./login/loginPage";
import LogoutButton from "./login/logoutButton";
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
          <LogoutButton user={user} />
          <PostForm user={user} />
          <PostList />
        </>
      )}
    </div>
  );
}

export default App;
