import React, { useState } from "react";
import { LoginForm } from "./loginForm";

function Login() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {!showForm ? (
        <button
          onClick={() => {
            setShowForm(true);
          }}
          type="button"
        >
          {" "}
          Login{" "}
        </button>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default Login;
