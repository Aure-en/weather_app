import React, { useState, useEffect } from 'react'
import keys from '../config'

function Image( { description = 'sky' }) {

  const [image, setImage] = useState({})
  const encodedDescription = encodeURIComponent(description)

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?query=${encodedDescription}&client_id=${keys.unsplash}`)
      .then(response => response.json())
      .then(response => setImage(response))
  }, [description])

  return (
    <div>
      {
        Object.keys(image).length !== 0 &&
        <img src={image.urls.full} alt={image.description} />
      }
    </div>
  )
}

export default Image
