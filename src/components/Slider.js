import React from "react";
import { Link } from "react-router-dom";
import "./SwipableBanner.css";

function Slider({ image, title, desc, category }) {
  return (
    <div className="slider">
      <div className="slider__image">
        {<img src={image} alt="sliderimages" />}
        <div className="sliderinfo">
          <h1>{title}</h1>
          <span>{desc}</span>

          <button><Link to={`/products/${category}`}>Shop Now</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
