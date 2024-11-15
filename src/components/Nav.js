function Nav(props) {
  let navStyle = {
    display: "flex",
    backgroundColor: "orange",
    flexDirection: "column",
    textAlign: "center",
  };
  return (
    <div style={navStyle}>
      <h1>This is a sweet Nav</h1>
      <h2>Name: {props.name.concat("SEX")}</h2> <h2>Color: {props.color}</h2>
    </div>
  );
}

// export default Nav;
export default Nav;
