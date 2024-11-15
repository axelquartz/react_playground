let imgUrl =
  "https://images.unsplash.com/photo-1731566121399-cc28c206e0ac?q=80&w=2214&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let imgStyle = {
  width: "300px",
};
const Main = (props) => {
  return (
    <>
      <h1>THIS IS A MAIN COMPONENT: {props.character}</h1>
      <h2>
        This is a prompt element: <img src={imgUrl} style={imgStyle}></img>
      </h2>
    </>
  );
};

export default Main;
