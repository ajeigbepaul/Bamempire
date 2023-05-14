import React from 'react'
import { Link } from 'react-router-dom'
import "./CategoryItem.css"

function CategoryItem({category}) {
  return (
    <Link to={`/products/${category.cat}`}>
    <div className='categoryItem__container'>
      
      <div className='categoryItem__img'><img src={category.img} alt='category'/></div>
      <div className='categoryItem__info'><h2>{category.title}</h2></div>
      
        
    </div>
    </Link>
  )
}

export default CategoryItem