import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Card from "./components/Card";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
function Body() {
  return <h2>This is a body element</h2>;
}

function App() {
  return (
    <div>
      <Card>
        <Nav name="Axel" color="blue" />
      </Card>
      <Body />
      <Card>
        <Main character="Guy" />
      </Card>
      <Logo />
      <Footer h1="Esloro" />
    </div>
  );
}

export default App;
