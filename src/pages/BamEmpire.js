import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import "./BamEmpire.css"
import Products from '../components/Products'



function BamEmpire() {
  return (
    <div className='bamempire'>
    <Announcement/>
    <Navbar/>
    <Banner/>
    <Categories/>
    <Products/>
    </div>
    
  )
}

export default BamEmpire