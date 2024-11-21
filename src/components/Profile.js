import React from "react";
import { useState, useContext } from "react";

import { LoginContext } from "./Contexts/LoginContext";

function Profile() {
  const { userName } = useContext(LoginContext);
  return (
    <div>
      <h1>Profile</h1>
      <h2>userName: {userName}</h2>
    </div>
  );
}

export default Profile;
