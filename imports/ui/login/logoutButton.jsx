import React from "react";
import "./styles.css";

function LogoutButton({ user }) {
  const logout = () => Meteor.logout();

  return (
    <div className="logoutSection">
      <p> {user.username}</p>
      <button className="logout" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

export default LogoutButton;
