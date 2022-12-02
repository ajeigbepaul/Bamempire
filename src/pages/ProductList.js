import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import "./ProductList.css"

function ProductList() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div className='productlist__title'>
            <h2>Women</h2>
        </div>
        <div className='filter__container'>
            <div className='filter'>
              <h2>FilterProducts</h2>
              <div className='filter__select'>
                <select className='selectsize'>
                  <option disabled selected>Color</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Red</option>
                  <option>Yellow</option>
                  <option>Green</option>
                </select>
                <select className='selectsize'>
                  <option disabled selected>Size</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className='filter2'>
            <h2>Sort Products</h2>
            <div className='filter__sort'>
                <select className='selectsize'>
                  <option selected>Newest</option>
                  <option>Price (asc)</option>
                  <option>Price (desc)</option>
                </select>
              </div>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList