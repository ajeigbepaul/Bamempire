import React from 'react'
import "./CategoryItem.css"

function CategoryItem({category}) {
  return (
    <div className='categoryItem__container'>
        <div className='categoryItem__img'><img src={category.img} alt='category'/></div>
        <div className='categoryItem__info'><h2>{category.title}</h2><button>More</button></div>
       
    </div>
  )
}

export default CategoryItem