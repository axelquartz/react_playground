import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { useState } from "react";
// Import my modules
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [showName, setShowName] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div>
      <LoginContext.Provider value={{ userName, setUserName, setShowName, showName }}>{showName ? <Profile /> : <Login />}</LoginContext.Provider>
    </div>
  );
}

export default App;
