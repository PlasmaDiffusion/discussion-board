import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import React, { useState } from "react";

export const LoginForm = ({ signingUp = false }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    console.log(e);
    e.preventDefault();

    if (signingUp) {
      Accounts.createUser({ username, password, });
    } else {
      Meteor.loginWithPassword(username, password);
    }
  };

  return (
    <form onSubmit={submit} className="login-form">
      <div>
        <label htmlFor="username">Email</label>

        <input
          type="email"
          placeholder="Email"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="submit" value="login">
          {signingUp ? "Sign Up" : "Log In"}
        </button>
      </div>
    </form>
  );
};
