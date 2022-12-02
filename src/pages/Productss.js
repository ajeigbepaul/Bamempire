import React from "react";
import Announcement from "../components/Announcement";
import FilterColor from "../components/FilterColor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "./Productss.css";
import QuantityContainer from "../components/QuantityContainer";
// toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
// moment(new Date(row.time)).format("YYYY-MM-DD")}
const price = 500;

function Productss() {
  return (
    <div className="productss__container">
      <Announcement />
      <Navbar />
      <div className="productss__wrapper">
        <div className="productss__prodimg">
          <img src="images/femaleshoe_5.jpg" alt="prod" />
        </div>
        <div className="productss__infocontainer">
          <div className="productss__title">
            <h2>Mens shoes</h2>
          </div>
          <div className="productss__desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum
            </p>
          </div>
          <div className="productss__price">
            <span>
              ₦ {price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
          </div>
          <div className="productfilter__container">
            <div className="productfilter">
              <h2>Filter Colors</h2>
              <div className="filter__color">
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="grey" />
              </div>
            </div>
            <div className="productfilter">
              <h2>Filter Size</h2>
              <select className="selectprodsize">
                <option disabled selected>
                  Size
                </option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="productaddContainer">
            <QuantityContainer/>
            <div className="addToCart">ADD TO CART</div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Productss;
