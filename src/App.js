import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
// Import my modules
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
