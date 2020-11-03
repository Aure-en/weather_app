import React, { useState, useEffect } from 'react'
import keys from '../config'

function Image( { description = 'sky' }) {

  const [image, setImage] = useState({})
  const [imageNumber, setImageNumber] = useState(Math.floor(Math.random() * 29))
  const encodedDescription = encodeURIComponent(`${description}`)

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${encodedDescription}&per_page=30&client_id=${keys.unsplash}`)
      .then(response => response.json())
      .then(response => { 
        console.log(response, encodedDescription)
        setImage(response)
        setImageNumber(Math.floor(Math.random() * 29))
      })
  }, [description])

  return (
    <div className="image">
      {
        Object.keys(image).length !== 0 &&
        <img src={image.results[imageNumber].urls.regular} alt={image.description} />
      }
    </div>
  )
}

export default Image
