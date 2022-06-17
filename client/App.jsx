import React from "react";
import LoginButton from "./components/login/loginButton";
import PostForm from "./components/posts/postForm";
import PostList from "./components/posts/postList";

function App() {
  return (
    <div>
      <LoginButton />
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
