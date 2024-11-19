import { useState } from "react";
import MealCounter from "./MealCounter";

function MealList() {
  const meals = ["pizza", "salad", "soup"];
  const [meal, setMeal] = useState(meals);
  const [displayMeal, setDisplayMeal] = useState("");

  function clickHandler() {
    meals.pop();
    setMeal(meals);
    return setDisplayMeal(meal.length);
  }

  return (
    <div>
      <h1>Current Meals</h1>
      <button onClick={clickHandler}>Finish</button>
      <p>{meal}</p>
    </div>
  );
}

export default MealList;
