import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import "./ProductList.css"
import { useLocation } from 'react-router-dom'

function ProductList() {
  const location  = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filtercolors, setFiltercolors] = useState({})
  const [filtersize, setFiltersize] = useState({})

  const [sort, setSort] = useState("newest")
 
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div className='productlist__title'>
            <h2>{cat}</h2>
        </div>
        <div className='filter__container'>
            <div className='filter'>
              <h2>FilterProducts</h2>
              <div className='filter__select'>
                <select className='selectsize' name="color" value={filtercolors} onChange={e=>setFiltercolors(e.target.value)}>
                  <option selected>Color</option>
                  <option>black</option>
                  <option>white</option>
                  <option>red</option>
                  <option>yellow</option>
                  <option>green</option>
                </select>
                {/* <select className='selectsize' name='size' value={filtersize} onChange={e=>setFiltersize(e.target.value)}>
                  <option selected>Size</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select> */}
              </div>
            </div>
            <div className='filter2'>
            <h2>Sort Products</h2>
            <div className='filter__sort'>
                <select className='selectsize' onChange={e=>setSort(e.target.value)}>
                  <option value="newest" >Newest</option>
                  <option value="asc">Price (asc)</option>
                  <option value="desc">Price (desc)</option>
                </select>
              </div>
            </div>
        </div>
        <Products  filtercolors={filtercolors} filtersize={filtersize} sort={sort} cat={cat}/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList