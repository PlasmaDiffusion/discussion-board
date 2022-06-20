import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import React, { useState } from "react";
import "./styles.css"

export const LoginForm = ({ signingUp = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    console.log(e);
    e.preventDefault();

    if (signingUp) {
      Accounts.createUser({ username: email, password, email: email });
    } else {
      Meteor.loginWithPassword({ username: email }, password, function (error) {
        if (error) alert(error);
      });
    }
  };

  return (
    <form onSubmit={submit} className="login-form">
      <div className="inputField">
        <label htmlFor="username">Email</label>

        <input
          type="email"
          placeholder="Email"
          name="username"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="inputField">
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
