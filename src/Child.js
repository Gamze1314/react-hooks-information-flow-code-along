import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor  , color }) {
 // onChangeColor : is a callback function passed as prop to update the state in Parent component
   function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  console.log(onChangeColor)
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
