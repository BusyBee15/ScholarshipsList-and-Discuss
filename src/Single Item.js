import React from 'react'
import './Single Item.css'

function Single_Item({id, title, image, description}) {
 
  return (
   <article>
    <div className='image'>
       <img src={image} alt="" />
    </div>
    <div className="info">
       <h3>{title}</h3>
       <p>{description}</p>
    </div>
   </article>
  )
}

export default Single_Item