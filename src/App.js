import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { useState } from "react";
// Import my modules
import Wrapper1 from "./components/Wrapper1";
import Wrapper2 from "./components/Wrapper2";

function App() {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);
  return (
    <div>
      <Wrapper1 fruits={fruits} />
      <Wrapper2 fruits={fruits} />
    </div>
  );
}

export default App;
