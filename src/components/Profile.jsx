import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return <div>{<h1>Profile: {user == null ? "No user" : user.username}</h1>}</div>;
}

export default Profile;
