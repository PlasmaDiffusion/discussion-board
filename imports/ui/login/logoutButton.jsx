import React from "react";

function LogoutButton({ user }) {
  const logout = () => Meteor.logout();

  return (
    <>
      <p> {user.username}</p>
      <button className="user" onClick={logout}>
        Log Out
      </button>
    </>
  );
}

export default LogoutButton;
