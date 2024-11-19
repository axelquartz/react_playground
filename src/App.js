import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
// Import my modules
import MealList from "./components/MealList";
import MealCounter from "./components/MealCounter";

function App() {
  const date = new Date().toLocaleTimeString();
  return (
    <div>
      <MealList />
      <MealCounter />
    </div>
  );
}

export default App;
