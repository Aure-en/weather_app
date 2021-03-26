import React, { useState, useEffect } from 'react'
import keys from '../config'

function Image( { description } ) {

  const [image, setImage] = useState({})
  const [imageNumber, setImageNumber] = useState(0)
  const encodedDescription = encodeURIComponent(`${description.weather[0].description}`)

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${encodedDescription}&per_page=20&client_id=${keys.unsplash}`)
      .then(response => response.json())
      .then(response => { 
        setImage(response)
        setImageNumber(0)
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
