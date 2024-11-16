import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
// Import my modules
import ModeToggler from "./components/ModeToggler";

function Body() {
  return <h2>This is a body element</h2>;
}

function App() {
  return (
    <div>
      <ModeToggler />
    </div>
  );
}

export default App;
