import React, { useState } from "react";
import { LoginForm } from "./loginForm";

// Shows login form by default, and it can swap to a sign up form instead.
function LoginPage() {
  const [signingUp, setSigningUp] = useState(false);

  return (
    <>
      <LoginForm signingUp={signingUp} />

      <>
        {signingUp ? (
          <button
            onClick={() => {
              setSigningUp(false);
            }}
            type="button"
          >
            Back to Login
          </button>
        ) : (
          <button
            onClick={() => {
              setSigningUp(true);
            }}
            type="button"
          >
            Don't have an account? Sign Up Instead
          </button>
        )}
      </>
    </>
  );
}

export default LoginPage;
