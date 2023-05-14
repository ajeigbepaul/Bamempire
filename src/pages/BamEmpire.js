import React, { useEffect } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import "./BamEmpire.css"
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



function BamEmpire() {

  return (
    <div className='bamempire'>
    <Announcement/>
    <Navbar/>
    <Banner/>
    {/* <Categories/> */}
    <Products/>
    {/* <Newsletter/> */}
    <Footer/>
    </div>
    
  )
}

export default BamEmpire