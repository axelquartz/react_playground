import { useState } from "react";
import Wrapper2 from "./Wrapper2";

const Wrapper1 = (props) => {
  return (
    <div>
      {props.fruits.map((f) => (
        <h3 key={f.id}>{f.fruitName}</h3>
      ))}
    </div>
  );
};

export default Wrapper1;
