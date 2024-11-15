import mainImage from "../JavaScript-logo.png";

function Logo(props) {
  const userLogo = <img src={mainImage} style={{ width: "100px" }}></img>;
  return (
    <div>
      {props.children}
      <h1>This is a logo element</h1>
      {userLogo}
    </div>
  );
}

export default Logo;
