import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUSer } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUSer({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>

      <input type="text" placeholder="Username" value={username} name="" id="" onChange={(e) => setUsername(e.target.value)} />

      <input type="password" name="" id="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
