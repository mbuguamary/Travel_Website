import React, { useEffect } from 'react'
import { useState,useEffect } from 'react';
import Gallery from './Gallery';

const GalleryList = (props) => {
  const [images,setImages] = useState([]);
  useEffect(() =>{
    fetch() 
    .then(res => res.json())
    .then(data => {setImages(data)})

  },[])

  return (
    <div>
        {images.map(image => {
         return(
            <Gallery
            key={image.id}
            image={image.avatar}
            title={image.title}
            description={image.description}
            />  
         )   
        })}
        
    </div>
  )
}

export default GalleryList

