function Card(props) {
  let card = {
    backgroundColor: "red",
  };
  let classesArr = ["a", "b", "c"];

  let getRandomClass = () => {
    return classesArr[Math.floor(Math.random() * 3)];
  };

  return (
    <div style={card}>
      <h1 style={{ backgroundColor: "yellow", textAlign: "center" }}>This is a card</h1>
      {props.children}
      <h1 className={getRandomClass()}>This is a Class Added</h1>
      <h1>Ternary:{Math.ceil(Math.random() * 2) == 1 ? "true" : "false"}</h1>
    </div>
  );
}

export default Card;
