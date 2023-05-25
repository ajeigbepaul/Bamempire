import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import SwipableBanner from "./SwipableBanner";
import { CategoryData } from "../utils/CategoryData";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="slider">
      <div className="hero__left">
        <span className="hero__catTitle"> CATEGORY</span>
        {CategoryData.map((cat) => (
          <Link to={`/products/${cat.cat}`} key={cat.id}>
            <div className="hero__category">
              <div className="hero__icon">{cat.Icon}</div>
              <span className="hero__title">{cat.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="hero__center">
        <SwipableBanner />
      </div>
    </div>
  );
}

export default Banner;
