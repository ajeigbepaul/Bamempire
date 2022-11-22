import React from 'react'
import "./Products.css"
import {PopularProduct} from "../utils/PopularProduct"
import Product from './Product'

function Products() {
  return (
    <div className='products'>
        <h2>Popular Product</h2>
        <div className='products__product'>
        {PopularProduct.map(item=><Product key={item.id} product={item}/>)}

        </div>
        
    </div>
  )
}

export default Products