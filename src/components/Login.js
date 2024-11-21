import { useState, useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";

function Login() {
  const { setUserName } = useContext(LoginContext);
  const showNameHandler = () => {
    showName == true ? setShowName(false) : setShowName(true);
  };
  return (
    <div>
      <input type="text" name="username" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
      <button onClick={showNameHandler}>Submit</button>
      {/* {showName && <h1>{userName}</h1>} */}
    </div>
  );
}

export default Login;
