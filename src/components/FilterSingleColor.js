import React from "react";
import "./FilterSingle.css";
// import { FaCheck } from "react-icons/fa";

function FilterSingleColor({ color}) {
    const singlecolor = color[0]

  return (
    <div className="single">
      <div
        className="singlecolors"
        style={{ backgroundColor: singlecolor }}
      ></div>
      <span className="single__color">{singlecolor}</span>
    </div>
  );
}

export default FilterSingleColor;
