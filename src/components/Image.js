import React, { useState, useEffect } from 'react'
import keys from '../config'

function Image( { description = 'sky' }) {

  const [image, setImage] = useState({})
  const encodedDescription = encodeURIComponent(`${description} sky`)

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?query=${encodedDescription}&client_id=${keys.unsplash}`)
      .then(response => response.json())
      .then(response => { console.log(response, description); setImage(response)})
  }, [description])

  return (
    <div className="image">
      {
        Object.keys(image).length !== 0 &&
        <img src={image.urls.regular} alt={image.description} />
      }
    </div>
  )
}

export default Image
