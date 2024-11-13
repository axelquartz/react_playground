import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
// import Nav from "./components/Nav";
import { Nav } from "./components/Nav";

function Heading() {
  return <h1>This is an h1 heading</h1>;
}

function Body() {
  return <h2>This is a body element</h2>;
}

function App() {
  return (
    <div>
      <Nav />
      <Heading />
    </div>
  );
}

export default App;
