function Card(props) {
  let card = {
    backgroundColor: "red",
  };
  return (
    <div style={card}>
      <h1 style={{ backgroundColor: "yellow", textAlign: "center" }}>This is a card</h1>
      {/* {props.children} */}
    </div>
  );
}

export default Card;
