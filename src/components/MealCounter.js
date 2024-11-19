function MealCounter(props) {
  return (
    <div>
      <h2>Meals Remaining</h2>
      <h3>{props.remaining}</h3>
    </div>
  );
}

export default MealCounter;
