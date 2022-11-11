import React from "react";
import "./SwipableBanner.css";

function Slider({ image, title, desc }) {
  return (
    <div className="slider">
      <div className="slider__image">
        {<img src={image} alt="sliderimages" />}
        <div className="sliderinfo">
          <h1>{title}</h1>
          <span>{desc}</span>

          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
