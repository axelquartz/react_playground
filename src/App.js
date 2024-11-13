import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import Nav from "./components/Nav";
import Main from "./components/Main";

function Body() {
  return <h2>This is a body element</h2>;
}

function App() {
  return (
    <div>
      <Nav name="Axel" color="blue" />
      <Main character="Guy" />
    </div>
  );
}

export default App;
